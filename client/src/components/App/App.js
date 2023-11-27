import React from "react";
import {Route,Routes, useNavigate} from "react-router-dom";

import LandingPage from '../LandingPage/landing-page';
import LoginSignup from "../Login-Signup/login-signup";
import Journal from "../Journal/journal";
import SupportGroup from "../SupportGroup/support-group";

//fix journal component
//import Journal from ""


const App = () => {
    const navigate = useNavigate;

    return (
        <Routes>
            <Route path ="/">
                <Route index element={<LandingPage/>} />
                <Route path="login-signup" element={<LoginSignup/>}/>
                <Route path="journal" element={<Journal/>}/>
                <Route path="support-group" element={<SupportGroup/>}/>
            </Route>
        </Routes>
    )
}

export default App;