import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {action,originals,comedy,romance,horror} from './urls';
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={action}title='Action' isSmall/>
      <RowPost url={comedy}title='Comedy' isSmall/>
      <RowPost url={horror}title='Horror' isSmall/>
      <RowPost url={romance}title='romance' isSmall/>
    </div>
  )
}
