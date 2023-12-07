import { React, useState,useEffect } from "react";
import { useNavigate, Route, Routes, Link,useParams} from "react-router-dom";
import axios from "axios";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./journal.css";

const JournalEntry = ({title, timestamp, id }) => {

  const navigate = useNavigate();

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


const NewEntry= () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); 
  const navigate = useNavigate();

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
      navigate('/');
    }catch(error){
      console.error('error saving',error.message);
    }
  };

  return (
    <div className = 'editor-page'>
        <h2>New Journal Entry</h2>

        <label className='title-editor'>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='title-input'/>

        <div className="editor-buttons">
          <button onClick={handleSave} >Save</button>
         <Link to="/journal">
           <button>Cancel</button>
         </Link>
        </div>

        <label className='content-editor'>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className='content-input'/>

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
            <JournalEntry key={entry.id} 
            timestamp ={entry.timeStamp} 
            id={entry.timeStamp}    
            title={entry.title} />
          ))}
        </div>

      </div>
      <Footer/>
    </div>
  )
}

const ViewJournal = () => {
  const id  = useParams();
  const [content, setContent] = useState('');
  const [title,setTitle] = useState('');

  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() =>{
    const viewJournalContent = async() =>{
      try{
        const user = localStorage.getItem('userID');
        const response = await axios.post(
          'http://localhost:3001/journal/api/get-entries',
          { userID: user },
          config
        );

        for(let i = 0; i < response.data.length;i++){
          const hash = response.data[i].timeStamp ;
          if(toString(hash) === toString(id.id)){
            setContent(response.data[i].entry);
            setTitle(response.data[i].title);
            break;
          }
        }

      }catch(error){
        console.log('Error getting journal entries:', error.message);
      }
    }

    viewJournalContent();
  },[]);

  console.log(content);
  console.log(title);
  return(

<div className='view-page'>
  <div className='title-view-container'>
    <div className="title-view">
      {title}
    </div>
  </div>

  <div className='content-view-container'>
    <div className='content-view'>
      {content}
    </div>
  </div>

  <Footer />
</div>
  )
};

const Journal = ({isSignedIn}) => {  
  return(
    <Routes>
      <Route path='/' element ={<JournalPage isSignedIn={isSignedIn} />}></Route>
      <Route path='edit/new' element ={<NewEntry/>}/>
      <Route path='entry/:id' element={<ViewJournal/>}/>
    </Routes>
  )
};

export default Journal;