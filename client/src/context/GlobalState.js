import React,  {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    messages: []
}

// create context
export const GlobalContext = createContext(initialState)


// provider component
export const GlobalProvider = ({ children }) =>{
    const [state, disptach] = useReducer(AppReducer, initialState)
    
    //actions - send message
    function sendMessage(message){
        disptach({
            type: 'SEND_MESSAGE',
            payload: message
        })
    }
    return (<GlobalContext.Provider value={{
        message: state.message,
        sendMessage
    }}>
        {children}
    </GlobalContext.Provider>);
}