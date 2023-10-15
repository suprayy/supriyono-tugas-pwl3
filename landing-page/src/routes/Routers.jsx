import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </>
  )
}

export default Routers