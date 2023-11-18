import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './journal.css';

const LandingPage = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleClick = () => {
    // Handle save functionality
    console.log('Saving:', content);
  };

  return (
    <div className='notebook'>
      <div className='header'>Your Journal</div>
      <div className='content' contentEditable="true" onChange={handleContentChange}>
        {content}
      </div>
      <button className="save-button" onClick={handleClick}>Save</button>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default LandingPage;
