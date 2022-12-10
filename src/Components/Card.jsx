import styles from "./Card.module.css";
import {Link} from 'react-router-dom';

const Card = (props) => {

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/${props.data.matricula}`}>           
          <Link key={props.data.matricula} to={`/dentist/${props.data.matricula}`}></Link>
          <h5 className={`card-title ${styles.title}`}>{props.data.nome + ' ' + props.data.sobrenome}</h5>
          </a>
          <p class="card-text">Usuário: {props.data.usuario.username}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
