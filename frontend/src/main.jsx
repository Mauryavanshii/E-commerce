import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import AddProduct from './components/AddProduct.jsx'
import AdminPannel from './components/AdminPannel.jsx'
import AddProduct from './components/AddProduct.jsx'
import ViewData from './components/ViewData.jsx'
import UpdateData from './components/UpdateData.jsx'


import ClientNavbar from './client/ClientNavbar.jsx'
import Home from './client/Home.jsx'
import ClientApp from './ClientApp.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import Protected from './components/Protected.jsx'
import Cart from './client/Cart.jsx'
import ClientLogin from './client/ClientLogin.jsx'
import ClientRegister from './client/ClientRegister.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<ClientApp />}>
        <Route path='' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/clientLogin' element={<ClientLogin/>}/>
        <Route path='/clintSignup' element={<ClientRegister/>}/>
        
      </Route>



      <Route path='/adminpannel/' element={<App />}>
        <Route path='' element={<Protected>
          <AdminPannel />
        </Protected>} />
        <Route path='/adminpannel/addProduct' element={<Protected>
          <AddProduct />
        </Protected>} />
        <Route path='/adminpannel/viewdata/:id' element={<ViewData />} />
        <Route path='/adminpannel/updatedata/:id' element={<UpdateData />} />
        <Route path='/adminpannel/adminlogin' element={<AdminLogin />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
