import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Slidebar from './components/slidebar'
import Center from './components/Center'
import './App.css'
import './index.css';
import Center2 from './components/Center2'
import Zoho  from './components/Zoho'


function App() {
 return (
  <>
 
  <div className="grid">
    <Slidebar/>
    <div className='boxes'>
    <Center/>
    <Center2/>
    <Zoho/>
    </div>
  </div>
  </>
 )
}

export default App
