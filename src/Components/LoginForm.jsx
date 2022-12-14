import styles from "./Form.module.css";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLogged } from "../hooks/useLogged";


const LoginForm = () => {
  
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [authToken, setAuthToken] = useState('')
  const { handleAuth }  = useLogged()
  

  const navigation = useNavigate('')

  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    //login teste: dentistaAdmin   pass: admin123
    e.preventDefault();
    
    
     const apiUrl = 'http://dhodonto.ctdprojetos.com.br/auth'

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'      
    }

    const requestBody = JSON.stringify({
      // "username": "dentistaAdmin",//userName,
      // "password": "admin123"//userPassword
      username: userName,
      password: userPassword
    })

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody
    }

    fetch(`${apiUrl}`, requestConfig).then(
      response => {
        if(response.ok){
          response.json().then(
            data => {
              // localStorage.setItem('authToken', data.token)
              // setAuthToken(data.token)
              handleAuth(data.token)
              alert('Login realizado com sucesso')
              navigation('/home')              
            }
          )
        } else { 
          localStorage.removeItem('authToken')
          setUserName('')
          setUserPassword('')
          alert ('usuario ou senha digitada está errada')}
      }
    )
    
  };
  const { theme } = useTheme()  

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${theme} ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              value={userName}
              onChange={event => setUserName(event.target.value)}
              required
              
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              value={userPassword}
              onChange={event => setUserPassword(event.target.value)}
              required
              
            />
            <button onClick={() => handleAuth(localStorage.getItem('authToken'))} className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
