import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({children}) => { //Change the provider to make changes the Auth value
    
    const [Auth, setAuth] = useState(false)

    const value = {
        Auth,
        setAuth: () =>{
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