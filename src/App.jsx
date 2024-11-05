import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost />
    </div>
  )
}
