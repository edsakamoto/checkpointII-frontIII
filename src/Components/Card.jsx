import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import { useTheme } from "../hooks/useTheme";

const Card = (props) => {

  const { theme } = useTheme()

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${theme}`}>

        <Link key={props.data.matricula} to={`/dentist/${props.data.matricula}`}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
        </Link>
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link key={props.data.matricula} to={`/dentist/${props.data.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {props.data.nome + ' ' + props.data.sobrenome}
            </h5>
          </Link>
          <p className="card-text">Usuário: {props.data.usuario.username}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
