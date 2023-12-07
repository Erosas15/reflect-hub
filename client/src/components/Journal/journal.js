import { React, useState,useEffect } from "react";
import { useNavigate, Route, Routes, Link,useParams} from "react-router-dom";
import axios from "axios";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./journal.css";

const JournalEntry = ({ title }) => {
  return (
    <div className="journal-entry">
      <div>{title}</div>
    </div>
  );
};


const NewEntry= () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); 

  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleSave = async() =>{
    try{
      const user = localStorage.getItem('userID');

      await axios.post('http://localhost:3001/journal/api/add-entries',
      {userID: user, time: Date.now(),entry:content, title:title},config);
    }catch(error){
      console.error('error saving',error.message);
    }
  };

  return (
    <div classname = 'editor-page'>
        <h2>New Journal Entry</h2>

        <label className='title-editor'>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='title-input'/>
        <div className="editor-buttons">
         <Link to="/journal">
          <button onClick={handleSave} >Save</button>

           <button>Cancel</button>
         </Link>
        </div>

        <label className='content-editor'>Content:</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} className='content-input'/>

      <Footer/>
    </div>
  )
};


const JournalPage= ({isSignedIn}) => {
  const navigate = useNavigate();
  const [journalEntries,setJournalEntries] = useState([]);

  const handleCreatenew = () => {
    navigate('edit/new');
  };

  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    const getJournalEntries = async () => {
      try {
        const user = localStorage.getItem('userID');
        const response = await axios.post(
          'http://localhost:3001/journal/api/get-entries',
          { userID: user },
          config
        );
        setJournalEntries(response.data);  // Assuming the response contains an array of entries
      } catch (error) {
        console.log('Error getting journal entries:', error.message);
      }
    };

    getJournalEntries();
  },[]);  
  
  return(
    <div className="journal-page">
      <Header isSignedIn={isSignedIn}/>

      <div className='box-container'>
        <div className="new-journal-entry" onClick={handleCreatenew}>
          <h3>New Entry</h3>
          <div>+</div>
        </div>

        <div className="journal-entries">
          {journalEntries.map((entry) => (
            <JournalEntry key={entry.id} title={entry.title} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

const Journal = ({isSignedIn}) => {  
  return(
    <Routes>
      <Route path='/' element ={<JournalPage isSignedIn={isSignedIn} />}></Route>
      <Route path='edit/new' element ={<NewEntry/>}/>
      <Route path='entry/:entryId'></Route>
    </Routes>
  )
};

export default Journal;