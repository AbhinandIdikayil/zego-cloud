import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Room from './pages/Room'

function App() {
  console.log(process.env.SECRET)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room/:roomId' element={<Room />} />
    </Routes>
  )
}

export default App
