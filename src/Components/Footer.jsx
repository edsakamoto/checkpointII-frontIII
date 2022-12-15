import styles from "./Footer.module.css";
import { useTheme } from "../hooks/useTheme";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  const { theme } = useTheme('dark')
  const verificaTemaEscuro = theme === "dark" || false
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Voltar para o topo</button>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div className={`${verificaTemaEscuro ? "navbar-dark bg-dark" : "navbar-light bg-light"} navbar-${theme} bg-${theme} ${styles.footer}`}>
        {/* navbar-dark bg-dark Footer_footer__rVQKD */}
          <div className="container">
            <div className={`row`}>
              <div className={`col-sm-12 col-lg-6 icons${theme}`} >
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                
                <img className={`${verificaTemaEscuro ? styles.iconsdark : ''} ${styles.icons} ${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo' />
              </div>
              
              <div className={`col-sm-12 col-lg-6 ${verificaTemaEscuro ? styles.iconsdark : ''} ${styles.icons}`}>
                <img src="/images/ico-facebook.png" alt="ícone do facebook" className={styles.icon} />
                <img src="/images/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
                <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
                <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
                <h5>teste</h5>
                <h5>teste</h5>  
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </footer >
  )
}

export default Footer