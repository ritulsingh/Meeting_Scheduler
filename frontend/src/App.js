import './App.css';
import Homepage from './Components/Homepage/Homepage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Profile from './Components/Homepage/Profile'
import Calender  from './Components/Homepage/Calender'
import CreateEvent from './Components/Homepage/CreateEvent'
import React from 'react'
import './bootstrap/bootstrap-mincss.css'
import './bootstrap/bootstrap-css.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route exact path="/" element={
            user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
          } />
        <Route path="/dashboard" element={<Homepage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/calender" element={<Calender/>} />     
        <Route path="/createevent" element={<CreateEvent/>} />      
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
