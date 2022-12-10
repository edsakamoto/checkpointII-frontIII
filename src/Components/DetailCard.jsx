import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";

const DetailCard = () => {

  const params = useParams(); //utilizado para obter o :id passado na rota que é o retorno da matricula da api do dentista
  const [detalhes, setDetalhes] = useState([])
  // console.log(params.id)

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    fetch(`https://dhodonto.ctdprojetos.com.br/dentista?matricula=${params.id}`).then(
      response =>{
        response.json().then(
          data =>{
            setDetalhes(data)
          }
        )
      }
    )
  }, [params.id]);
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>      
      <h1>Detail about Dentist {`: ${detalhes.nome}`} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
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
              <li className="list-group-item">Nome: {`${detalhes.nome}`}</li>
              <li className="list-group-item">Sobrenome: {`${detalhes.sobrenome}`}</li>
              <li className="list-group-item">Usuário: {`${detalhes.usuario.username}`}</li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button}`}
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
