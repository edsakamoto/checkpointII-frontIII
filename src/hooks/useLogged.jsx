//import { useState } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const LoggedContext = createContext()

//baseado totalmente na aula do dia 12/12/22 para solucionar a questão dos componentes não enxergarem/escutar a atualização do localstorage
export function LoggedProvider(props){

    const loggedLocalStorage = localStorage.getItem('authToken')
    const [authToken, setAuthToken] = useState(loggedLocalStorage)
    
      function deleteLocalStorage(){        
        localStorage.removeItem('authToken')
        setAuthToken(localStorage.getItem('authToken'))        
      }

      function handleAuth(token){

        localStorage.setItem('authToken',token)
        setAuthToken(token)
        
      }

      return(
        <LoggedContext.Provider value={{authToken, deleteLocalStorage, handleAuth}}>
            {props.children}
        </LoggedContext.Provider>
      )
}

export function useLogged(){
    const context = useContext(LoggedContext)

    return context
}