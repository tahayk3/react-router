import NavBar from './components/Navbar';
import { Route, Routes, Navigate } from "react-router-dom";

import { HomeScreen } from './routes/HomeScreen';
import { ContactScreen } from './routes/ContactScreen';
import { AboutScreen } from './routes/AboutScreen';

import React from "react";
function App(){
    return(
        <>
            <NavBar></NavBar>
            
            <Routes>
                <Route path='/' element={<HomeScreen></HomeScreen>} ></Route>
                <Route path='/contact' element={<ContactScreen></ContactScreen>} ></Route>
                <Route path='/about' element={<AboutScreen></AboutScreen>} ></Route> 
                <Route path='/*' element={<Navigate to='/'></Navigate>} ></Route> 
            </Routes>
        </>
    );
}

export default App;