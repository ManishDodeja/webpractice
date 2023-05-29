import React from 'react'
import Header from './components/header'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Hero from './components/hero'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/footer'


export default function App() {
  return (
    <div>
    
      <Header/>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer footerText="Copyright© 2023"/>


    </div>
  )
}