import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./journal.css";

// Create a new context
const JournalContext = React.createContext();

// Create a context provider component
const JournalProvider = ({ children }) => {
  const [journalEntries, setJournalEntries] = useState([]);

  const getJournalEntries = async () => {
    try {
      const user = localStorage.getItem("userID");
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:3001/journal/api/get-entries",
        { userID: user },
        config
      );

      const journalEntryMap = {};
      response.data.forEach((entry) => {
        const timeStampStr = String(entry.timeStamp);
        journalEntryMap[timeStampStr] = entry;
      });

      setJournalEntries(journalEntryMap);
    } catch (error) {
      console.log("Error getting journal entries:", error.message);
    }
  };

  useEffect(() => {
    getJournalEntries();
  }, []);

  return (
    <JournalContext.Provider value={{ journalEntries }}>
      {children}
    </JournalContext.Provider>
  );
};

// Create a custom hook to use the context
const useJournalContext = () => {
  return useContext(JournalContext);
};

const JournalEntry = ({ title, timestamp, id }) => {
  const navigate = useNavigate();
  const { journalEntries } = useJournalContext();

  const handleEntryClick = () => {
    navigate(`/journal/entry/${id}`);
  };

  return (
    <div className="journal-entry" onClick={handleEntryClick}>
      <div>{title}</div>
      <div>{new Date(timestamp).toLocaleString()}</div>
    </div>
  );
};

const NewEntry = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSave = async () => {
    try {
      const user = localStorage.getItem("userID");

      await axios.post(
        "http://localhost:3001/journal/api/add-entries",
        { userID: user, time: Date.now(), entry: content, title: title },
        config
      );
      navigate("/");
    } catch (error) {
      console.error("error saving", error.message);
    }
    window.location.href = "/journal";
  };

  return (
    <div className="editor-page">
      <h2>New Journal Entry</h2>

      <label className="title-editor">Title:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />

      <div className="editor-buttons">
        <button onClick={handleSave}>Save</button>
        <Link to="/journal">
          <button>Cancel</button>
        </Link>
      </div>

      <label className="content-editor">Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="content-input"
      />

      <Footer />
    </div>
  );
};

const JournalPage = ({ isSignedIn }) => {
  const navigate = useNavigate();
  const { journalEntries } = useJournalContext();

  const handleCreateNew = () => {
    navigate("edit/new");
  };

  return (
    <div className="journal-page">
      <Header isSignedIn={isSignedIn} />

      <div className="box-container">
        <div className="new-journal-entry" onClick={handleCreateNew}>
          <h3>New Entry</h3>
          <div>+</div>
        </div>

        <div className="journal-entries">
          {Object.entries(journalEntries).map(([id, entry]) => (
            <JournalEntry
              key={id}
              timestamp={entry.timeStamp}
              id={id}
              title={entry.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ViewJournal = () => {
  const { id } = useParams();
  const { journalEntries } = useJournalContext();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (journalEntries[id]) {
      setContent(journalEntries[id].entry);
      setTitle(journalEntries[id].title);
    }
  }, [id, journalEntries]);

  const handleBackClick = () => {
    navigate("/journal");
  };

  return (
    <div className="view-page">
      <div className="title-view-container">
        <div className="title-view">{title}</div>
      </div>

      <div className="content-view-container">
        <div className="content-view">{content}</div>
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={handleBackClick}>
          &lt;
        </button>
      </div>

      <Footer />
    </div>
  );
};

const Journal = ({ isSignedIn }) => {
  return (
    <JournalProvider>
      <Routes>
        <Route path="/" element={<JournalPage isSignedIn={isSignedIn} />} />
        <Route path="edit/new" element={<NewEntry />} />
        <Route path="entry/:id" element={<ViewJournal />} />
      </Routes>
    </JournalProvider>
  );
};

export default Journal;
