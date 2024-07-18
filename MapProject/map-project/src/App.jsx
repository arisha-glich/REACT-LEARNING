import { useState } from 'react';
import './App.css';
import './styles/CountryDetail.css'
import { Outlet } from 'react-router-dom';
import Layout from './layout/Layouts';


function App() {
  return (
    <div className='app'>
      
    <Layout/>
    <Outlet/>
  </div>
  )
}

export default App
