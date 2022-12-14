import styles from "./Form.module.css";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogged } from "../hooks/useLogged";


const LoginForm = () => {
  
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('') 
  const { handleAuth }  = useLogged()
  const [formularioErro, setFormularioErro] = useState(false)

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
    
    
    const apiUrl = 'https://dhodonto.ctdprojetos.com.br/auth'

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'      
    }

    const requestBody = JSON.stringify({      
      username: userName,
      password: userPassword
    })

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody
    }

    if(userName === '' || userPassword === ''){
    
      setFormularioErro(true)
    
    } else if (userName.trim().length <= 6 || !userPassword.substring(0, 6).match(/\d/) || userPassword.length <= 4){
    //verifica se o username possui comprimento maior que 5 e também verifica se a senha possui algum número ou senha com menos de 4 caracteres
      setFormularioErro(true)
    
    } else {
    
      setFormularioErro(false)
    
    }

    fetch(`${apiUrl}`, requestConfig).then(
      response => {
        if(response.ok){
          response.json().then(
            data => {              
              handleAuth(data.token) //funcao global para armazenar o token, assim os outros componentes conseguem escutar o token qndo for atualizado ou removido
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
            {
              formularioErro 
              ? (<span>**Verifique suas informações novamente**</span>) 
              : null
            }
          </form>
          
        </div>
      </div>
    </>
  );
};

export default LoginForm;
