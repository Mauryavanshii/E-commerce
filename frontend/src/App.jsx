import React from 'react'
import Navbar from './components/Navbar'
// import AdminPannel from './components/AdminPannel'
import UserContextProvider from './context/UserContextProvider'
import { Outlet }  from 'react-router-dom'

function App() {
  return (
    <UserContextProvider>
    <Navbar/>
      {/* <AdminPannel></AdminPannel> */}
      <Outlet/>
      
    </UserContextProvider>
  )
}

export default App