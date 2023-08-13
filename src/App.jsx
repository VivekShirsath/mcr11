import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { AddMovie } from './pages/AddMovie'
import { Specific } from './pages/Specific'
import { WatchList } from './pages/WatchList'
import { Star } from './pages/Star'
import './App.css'

function App() {
  
  return (
    <>
    <Header />
     <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddMovie/>}/>
        <Route path="/specific/:id" element={<Specific/>}/>
        <Route path="/watch" element={<WatchList/>}/>
        <Route path="/star" element={<Star/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
