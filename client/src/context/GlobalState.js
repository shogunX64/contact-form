import React,  {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//Initial state
const initialState = {
    messages: []
}

// create context
export const GlobalContext = createContext(initialState)


// provider component
export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    //actions - send message
    async function sendMessage(message){
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        
          try {
            const res = await axios.post('/send', message, config);
        
            dispatch({
              type: 'SEND_MESSAGE',
              payload: res.data.data
            });
          } catch (err) {
            dispatch({
              type: 'TRANSACTION_ERROR',
              payload: err.response.data.error
            });
          }}
    return (<GlobalContext.Provider value={{
        message: state.message,
        error: state.error,
        sendMessage
    }}>
        {children}
    </GlobalContext.Provider>);
}