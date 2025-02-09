import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Signin from './Components/Signup';
import Login from './Components/Login'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Signup' element={<Signin/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App