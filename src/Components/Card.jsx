import styles from "./Card.module.css";

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
          <h5 className={`card-title ${styles.title}`}>{props.data.nome + ' ' + props.data.sobrenome}</h5>
          <p class="card-text">Usuário: {props.data.usuario.username}</p>

          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
