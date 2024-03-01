
import styles from '../styles/Navbar.module.css'
import logo from '../assets/imagenes/EDD.svg'

export default function Navbar() {
    return (
        <article className={styles.menuNavegacion}>
            <nav>
                <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo}></img>
                </div>
                <ul className={styles.links}>
                    <li className={styles.active}>Contactame</li>
                    <li className={styles.active}>Sobre mi</li>
                    <li className={styles.active}>Proyectos</li>
                </ul>
            </nav>
        </article>
    )
}
