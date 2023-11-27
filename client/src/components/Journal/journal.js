// Journal.js
import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './journal.css'

const NewJournalEntry = () => (
  <Link to="/edit/new" className="new-journal-entry">
    <h3>Create New Journal</h3>
    <div>+</div>
  </Link>
);

const JournalEntry = ({ title, content, date, id }) => (
  <Link to={`/edit/${id}`} className="journal-entry">
    <div className='journal-entry-container'>
      <h3>{title}</h3>
      <p>{content}</p>
      <p className="journal-entry-content">{date}</p>
    </div>
  </Link>
);

const JournalEditor = ({ match, history, onSave, title: initialTitle, content: initialContent }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    // Add logic to save the edited journal entry to Firebase
    onSave({ title, content });
    history.push('/');
  };

  return (
    <div className="journal-editor-container">
      <h2>Edit Journal Entry</h2>
      <label className="journal-editor-label">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="journal-editor-input" />
      <label className="journal-editor-label">Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="journal-editor-textarea" />
      <div className="journal-editor-buttons">
        <button onClick={handleSave}>Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

const JournalPage = ({ journalEntries }) => (
  <div  className='journal-page'>
    <NewJournalEntry />
    {journalEntries &&
      journalEntries.map((entry, index) => (
        <JournalEntry key={index} {...entry} />
      ))}
  </div>
);

const Journal = ({ journalEntries }) => (
  <div>
    <Header />

    <div className="journal-component">
      <Routes>
        <Route path="/" element={<JournalPage journalEntries={journalEntries} />} />
        <Route path="edit/:id" element={<JournalEditor />} />
        <Route path=":id" element={<JournalEntry />} />
      </Routes>
    </div>

    <Footer/>
  </div>
);

export default Journal;
