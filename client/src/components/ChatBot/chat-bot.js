import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./chat-bot.css";

const ChatBot = ({ isSignedIn, setIsSignedIn }) => {
  const [responses, setResponses] = useState([]);

  const handleContentChange = () => {
    const currentContent = document.querySelector(".ask-box").innerText;
  };

  const handleClick = async () => {
    const currentContent = document.querySelector(".ask-box").innerText.trim();
    console.log("Sending:", currentContent);

    let answer = "";
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:3001/chat/api/message",
        {
          input: currentContent,
        },
        config
      );
      answer = response.data.answer;
    } catch (error) {
      const rephraseRequests = [
        "Could you rephrase that, please?",
        "If possible, rephrase the sentence.",
        "I didn't quite catch that, can you rephrase it?",
        "Can you express that differently?",
        "Please provide an alternative wording.",
        "Could you say that in a different way?",
        "If it's convenient, could you rephrase?",
        "I'm having trouble understanding, could you rephrase?",
        "If you don't mind, rephrase the statement.",
        "Could you give me another version of that?",
        "Please elaborate or rephrase, if possible.",
        "In other words, how would you say that?",
        "Can you clarify by rephrasing?",
        "I'm not sure I follow, can you reword that?",
        "Can you express the idea in a different way?",
        "If it's not too much trouble, rephrase your statement.",
      ];
      const randomRephraseRequest =
        rephraseRequests[Math.floor(Math.random() * rephraseRequests.length)];
      answer = randomRephraseRequest;
    }

    //const formattedContent = currentContent.replace(/\n/g, "<br>");

    setResponses((prevResponses) => [
      ...prevResponses,
      { id: "User", text: currentContent },
      { id: "ChatBot", text: answer },
    ]);

    //Get a response to the most recent message.

    // Add logic to send the message to the server and update the messages state
    // setMessages((prevMessages) => [...prevMessages, { id: generateId(), text: currentContent }]);

    document.querySelector(".ask-box").innerText = "";

    // const messagesContainer = document.querySelector(".messages");
    // messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  return (
    <div className="page">
      <Header isSignedIn={isSignedIn} />
      <div className="response-box">
        <div className="responses">
          {/* responses go here */}
          {responses.map((response) => (
            <div
              key={response.id}
              className={`response ${
                response.id === "User" ? "self" : "other"
              } `}
            >
              <div
                className={`response-id ${
                  response.id === "User" ? "self" : "other"
                } `}
              >
                {response.id}
              </div>
              <div
                className="response-text"
                dangerouslySetInnerHTML={{ __html: response.text }}
              />
            </div>
          ))}
        </div>
        <div
          className="ask-box"
          contentEditable="true"
          onInput={handleContentChange}
        ></div>
        <button className="submit-button" onClick={handleClick}>
          Send
        </button>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<ChatBot />, document.getElementById("root"));

export default ChatBot;
