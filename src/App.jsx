import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage';
import Parent from './Components/Parent/Parent';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/login';
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dineinoptions' element={<Parent/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App