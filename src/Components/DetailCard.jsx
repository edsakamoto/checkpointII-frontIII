import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const DetailCard = () => {

  const params = useParams(); //utilizado para obter o :id passado na rota que é o retorno da matricula da api do dentista  
  const [nomeDentista, setNomeDentista] = useState('')
  const [sobrenomeDentista, setSobrenomeDentista] = useState('')
  const [usuario, setUsuario] = useState('')
  const { theme } = useTheme()

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    fetch(`https://dhodonto.ctdprojetos.com.br/dentista?matricula=${params.id}`).then(
      response =>{
        response.json().then(
          data =>{            
            setNomeDentista(data.nome)
            setSobrenomeDentista(data.sobrenome)
            setUsuario(data.usuario.username)
          }
        )
      }
    )
  },[params.id]);
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>      
      <h1>Detail about Dentist {`: ${nomeDentista}`} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row ${theme}`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {`${nomeDentista}`}</li>
              <li className="list-group-item">Sobrenome: {`${sobrenomeDentista}`}</li>              
              <li className="list-group-item">Usuário: {`${usuario}`}</li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-${theme} ${styles.button}`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
