import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [count, setCount] = useState(false)
    let[Login, setLogin]=useState('')
    console.log(Login)
  return (
    <UserContext.Provider value={{count, setCount, Login,setLogin}}>
        {children}
    </UserContext.Provider>
  )
}