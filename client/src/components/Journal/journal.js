import {React, useState} from 'react';
import { useNavigate,Route,Routes,Link, useParams } from 'react-router-dom';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import './journal.css'

const NewJournalEntry = () => {
  const navigate = useNavigate();

  const handleCreatenew = () => {
    navigate('edit/new');
  };

  return(
    <div className='new-journal-entry' onClick={handleCreatenew}>
      <h3>Create New Journal</h3>
      <div>+</div>
    </div>
  )
}

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
  const {id} = useParams();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const isCreatingNew = id ==='new';

  const handleSave = () => {
    // Add logic to save the edited journal entry to Firebase
    //onSave({ title, content });
    //history.push('/');
  };

  return (
    <div className="journal-editor-container">
      <h2>{isCreatingNew ? 'Create New Journal Entry' : 'Edit Journal Entry'}</h2>
      <label className="journal-editor-label">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="journal-editor-input" />

      <div className="journal-editor-buttons">
        <button onClick={handleSave}>{isCreatingNew ? 'Create' : 'Save'}</button>
        <Link to="/journal">
          <button>Cancel</button>
        </Link>
      </div>
      
      <label className="journal-editor-label">Content:</label>

      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="journal-editor-textarea" />
      
      

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

const Journal = ({ journalEntries, isSignedIn, setIsSignedIn }) => (
  <div>
      <Header
        isSignedIn={isSignedIn}/>
        
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
