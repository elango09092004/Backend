import { useState } from 'react'
import Signup from './signup.jsx'
import Login from './login.jsx'
import Home from './Home.jsx'


import axios from 'axios';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";



function App() {

  return (
    <>
        <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='Home' element={<Home/>}/>
       </Routes>

    </>
  )
}

export default App
