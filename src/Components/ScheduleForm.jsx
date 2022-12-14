import { useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import { useTheme } from "../hooks/useTheme";
import { useLogged } from "../hooks/useLogged";

const ScheduleForm = () => {

  const [dentistasAPI, setDentistas] = useState([])
  const [pacientesAPI, setPaciente] = useState([])
  const [dataHoraAgendadamento, setDataHoraAgendamento] = useState('')
  const [matriculaDentista, setMatriculaDentista] = useState('')
  const [matriculaPaciente, setMatriculaPaciente] = useState('')
  
  const { authToken, deleteLocalStorage } = useLogged()
  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
    fetch('http://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setDentistas(data)
          }
        )
      }
    )

    fetch('https://dhodonto.ctdprojetos.com.br/paciente').then(
      response => {
        response.json().then(
          data => {
            setPaciente(data.body)
          }
        )
      }
    )
  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

    /*exemplo do body utilizado no post para marcar consulta da versão dos professores
    {
      "dentista":{"matricula":"c3e6cf30-dccc-4e21-935a-8efe9344677e"}
     ,"paciente":{"matricula":"5dfce4f7-3d56-47d3-a442-b52c21c5d1f8"}
     ,"dataHoraAgendamento":"2022-12-15T13:23"
    }
    */
    event.preventDefault();

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }

    const requestBody = JSON.stringify({
      dentista: { matricula: matriculaDentista }, //matriculaDentista
      paciente: { matricula: matriculaPaciente },
      dataHoraAgendamento: dataHoraAgendadamento

    })

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody
    }

    fetch('http://dhodonto.ctdprojetos.com.br/consulta', requestConfig).then(
      response => {
        if(response.ok){

          alert('Consulta agendada com sucesso!')

        } else if (response.status === 400) {

          alert('Erro ao enviar o agendamento. Possíveis causas: Tentativa de agendar uma data anterior à Data atual')

        } else if (response.status === 403){

          deleteLocalStorage() //deleta o token que está guardada no localstorage, obrigando o usuario a realizar o login novamente
          alert('Token Expirado, favor realizar o login novamente.')

        } else {
          alert('Erro código: ' + response.status)
        }
      }
    )


  };

  const { theme } = useTheme()

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container ${theme}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist" onChange={e => setMatriculaDentista(e.target.value)}>
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {/* <option key={'Matricula do dentista'} value={'Matricula do dentista'}>
                  {`Nome Sobrenome`}
                </option> */}
                {
                  dentistasAPI.map(
                    dentistaAPI => {
                      return <option key={dentistaAPI.matricula}
                                     value={dentistaAPI.matricula}
                                     //onClick={(dentistaAPI) => setMatriculaDentista(dentistaAPI.matricula)}
                                     //onChange={e => setMatriculaDentista(e.target.key)}
                                     > 
                                     {dentistaAPI.nome} {dentistaAPI.sobrenome}
                             </option>
                    }
                  )
                }
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient" onChange={e => setMatriculaPaciente(e.target.value)}>
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {/* <option key={'Matricula do paciente'} value={'Matricula do paciente'}>
                  {`Nome Sobrenome`}
                </option> */}
                {
                  pacientesAPI.map(
                    pacienteAPI => {
                      return <option key={pacienteAPI.matricula}
                                     value={pacienteAPI.matricula}
                                     //onClick={(pacienteAPI) => setMatriculaPaciente(pacienteAPI.matricula)}
                                     > 
                                     {pacienteAPI.nome} {pacienteAPI.sobrenome}                                     
                             </option>
                    }
                  )
                }
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={event => setDataHoraAgendamento(event.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-${theme} ${styles.button
                }`}
              type="submit"
              onSubmit={handleSubmit}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
