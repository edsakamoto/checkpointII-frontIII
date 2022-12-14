import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { useTheme } from "../hooks/useTheme";
import { useLogged } from "../hooks/useLogged";


const Navbar = () => {

  // Utilização do Hook useTheme
  const { theme, changeTheme } = useTheme('dark')
  const { authToken, deleteLocalStorage} = useLogged()

  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home"> DH ODONTO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link className="nav-link" to="/home"> Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                {                  
                  authToken !== null
                  ? (<button onClick={deleteLocalStorage} className={`btn-${theme} btn ${styles.btnStyleLog}`}>Logout</button>)
                  : (<Link className="nav-link" to="/login"> Login</Link>)
                  
                }                
                
              </li>
              <li className={`nav-item ${theme}`}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')} className={`btn btn-${theme} ${styles.btnStyle}`}>                 
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
