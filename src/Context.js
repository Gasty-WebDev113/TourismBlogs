import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({children}) => { //Change the provider to make changes the Auth value
    
    const [Auth, setAuth] = useState(() =>{
        return window.sessionStorage.getItem('token') //If you have the token, this set true
    } )

    const value = {
        Auth,
        setAuth: (token) =>{
            window.sessionStorage.setItem('token', token) //Save webtoken in the session storage
            setAuth(true)
        }
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider, //Change the method of Provider and keep the Consumer
    Consumer: Context.Consumer
}