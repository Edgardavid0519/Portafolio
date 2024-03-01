import styles from '../styles/landing.module.css';
import { FiLinkedin } from "react-icons/fi";
import { BiLogoGmail,BiLogoGithub,BiLogoLinkedin } from "react-icons/bi";


export default function Landing() {
  return (
    <article className={styles.landingContainer}>
      <div className={styles.tituloContainer}>
      <h1 className={styles.titulo}>Desarrollador <br />Full-Stack</h1>
      <h2 className={styles.parrafoTitulo}>EDGAR DAVID RIAÑO AYALA</h2>
      </div>
      <div className={styles.parrafoLanding}>
      <p>Apasionado por el código y la resolución creativa de problemas, soy un desarrollador full stack que se especializa en la creación de soluciones integrales, combinando tanto el lado del cliente como el servidor para ofrecer experiencias digitales excepcionales.</p>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Contactame</button>
        <button className={styles.btn}>Conoce mi trabajo</button>
        <button className={styles.btn}>Descarga mi cv</button>
      </div>
      <div className={styles.iconsContainer}>
          <BiLogoLinkedin />
          <BiLogoGithub />
          <BiLogoGmail />
      </div>
    </article>
  )
}
