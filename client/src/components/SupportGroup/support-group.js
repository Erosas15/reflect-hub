import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./support-group.css";

const SupportGroup = ({ isSignedIn, onSignInClick, onSignOutClick }) => {
  const [messages, setMessages] = useState([]);

  const storedUserID = localStorage.getItem("userID");
  console.log(`userID retrieved: ${storedUserID}`);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/messages/api/get-messages");
      const sortedMessages = response.data.sort((a, b) => b.timestamp - a.timestamp);
      setMessages(sortedMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

 
  useEffect(() => {
    // Call fetchMessages when the component mounts
    fetchMessages();
    // Set up an interval to fetch messages every 10 seconds
    const intervalId = setInterval(fetchMessages, 10000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, []); // Call fetchMessages only once when the component mounts


  const handleContentChange = () => {
    //const currentContent = document.querySelector(".chat-box").innerText;
    // Note: innerText will preserve spaces and line breaks
  };

  const handleClick = async () => {
    const currentContent = document.querySelector(".chat-box").innerText.trim();
    console.log("Sending:", currentContent);

    try {
      await axios.post("http://localhost:3001/messages/api/send-message", {
        senderId: storedUserID,
        content: currentContent,
      }, { withCredentials: true });

      // Fetch updated messages after sending
      fetchMessages();

      // Clear the content after sending
      document.querySelector(".chat-box").innerText = "";

      // Scroll to the bottom after sending a message
      const messagesContainer = document.querySelector(".messages");
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="page">

      <Header
        isSignedIn={isSignedIn}
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}/>

      <div className="text-chat">
        <div className="messages">
        {messages.map((message) => (
          <div
            key={message.senderId}
            className={`message ${message.senderId === storedUserID ? 'self' : 'other'}`}
          >
            <div
              className={`message-id ${message.senderId === storedUserID ? 'self' : 'other'}`}
            >
              {`anynomous #${message.senderId.substring(0, 5)}`}
            </div>
            <div
              className="message-text"
              dangerouslySetInnerHTML={{ __html: message.content }}
            />
          </div>
        ))}
        </div>
        <div
          className="chat-box"
          contentEditable="true"
          onInput={handleContentChange}
        ></div>
        <button className="send-button" onClick={handleClick}>
          Send
        </button>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<SupportGroup />, document.getElementById("root"));

export default SupportGroup;
