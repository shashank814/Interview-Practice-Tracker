import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Questions from './pages/Questions'
import Navbar from './components/Navbar'

const App = () => {

  return (
   <div className='min-h-screen bg-sky-50 px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8'>
    <Navbar />
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/questions' element={<Questions />} />
      </Routes>
   </div>
  )
}

export default App
