//import { useState } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const LoggedContext = createContext()

export function LoggedProvider(props){

    const loggedLocalStorage = localStorage.getItem('authToken')
    const [authToken, setAuthToken] = useState(loggedLocalStorage)

    function islogged(token){
        if(token === null){
            //localStorage.removeItem('authToken')
            //setAuthToken(loggedLocalStorage)
            console.log(token)
          return false
        } else { 
            localStorage.setItem('authToken',token)
            // setAuthToken(localStorage.getItem('authToken'))            
            setAuthToken(token)
            console.log(token)           
            return true }
      }
    
      function deleteLocalStorage(token){
        // if(token.length > 1){
        //   localStorage.removeItem('authToken')
        //   alert('token apagado')
        // } else {
        //     alert('fez nada')
        //     console.log(token)
        //     }   
        //localStorage.setItem('authToken',token)
        //setAuthToken(token)
        localStorage.removeItem('authToken')
        //localStorage.setItem('authToken',null)
        alert('passou aqui')
      }

      function handleAuth(token){
        if(token === null){
            
            return false
            
        } else {

            localStorage.setItem('authToken', token)
            setAuthToken(token)
            
            return true

        }
        
      }

      return(
        <LoggedContext.Provider value={{authToken, islogged, deleteLocalStorage, handleAuth}}>
            {props.children}
        </LoggedContext.Provider>
      )
}

export function useLogged(){
    const context = useContext(LoggedContext)

    return context
}