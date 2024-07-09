import React from 'react'
import ClientNavbar from './client/ClientNavbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider1 from './context/UserContextProvider1'



 export default function ClientApp() {
    return (
        <UserContextProvider1>
            <ClientNavbar />
            <Outlet />

        </UserContextProvider1>
    )
}


