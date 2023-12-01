import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from '../LandingPage/landing-page';
import LoginSignup from "../Login-Signup/login-signup";
import Journal from "../Journal/journal";
import SupportGroup from "../SupportGroup/support-group";

const App = () => {

    // Example usage:
    const journals = [
        { id: 1, title: 'Journal Entry 1', content: 'Lorem ipsum...', date: '2023-01-01' },
        { id: 2, title: 'Journal Entry 2', content: 'Dolor sit amet...', date: '2023-01-02' },
        // Add more entries as needed
    ];

    return (
        <Routes>
            <Route path="/">
                <Route index element={<LandingPage />} />
                <Route path="login-signup" element={<LoginSignup />} />
                <Route path="journal/*" element={<Journal journalEntries={journals} />} />
                <Route path="support-group" element={<SupportGroup />} />
            </Route>
        </Routes>
    );
}

export default App;