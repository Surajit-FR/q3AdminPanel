import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import Signup from './pages/Signup'
import Sidebar from './components/shared/sidebar'
import Topbar from './components/shared/topbar'
import Dashboard from './pages/dashboard'

import './App.css'
import Footer from './components/shared/footer'




function App() {
  return (
    <>
     <Sidebar/>
     <div className='g_mine'>
      <Topbar/>
        {/* <Login/> */}
        {/* <Signup/> */}
        <Dashboard/>
      </div>
      <Footer/>
    </>
  )
}

export default App
