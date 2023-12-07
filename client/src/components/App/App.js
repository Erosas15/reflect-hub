import React, { useState,useEffect } from 'react';
import { Route, Routes} from "react-router-dom";

import LandingPage from '../LandingPage/landing-page';
import LoginSignup from "../Login-Signup/login-signup";
import Journal from "../Journal/journal";
import SupportGroup from "../SupportGroup/support-group";
import ChatBot from "../ChatBot/chat-bot";

const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    
    useEffect(() => {
        // Check if the user is in session storage when the application loads
        const storedUser = localStorage.getItem('userID');
        if (storedUser) {
          setIsSignedIn(true);
        }
      }, []);

    console.log(isSignedIn);
    
    return (
        <Routes>
            <Route path="/">
                <Route index element={<LandingPage isSignedIn = {isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                <Route path="login-signup" element={<LoginSignup />} />
                <Route path="journal/*" element={<Journal isSignedIn = {isSignedIn} />} />
                <Route path="support-group" element={<SupportGroup isSignedIn = {isSignedIn} setIsSignedIn = {setIsSignedIn} />} />
                <Route path="chat-bot" element={<ChatBot isSignedIn = {isSignedIn} setIsSignedIn = {setIsSignedIn} />} />
            </Route>
        </Routes>
    );
}

export default App;