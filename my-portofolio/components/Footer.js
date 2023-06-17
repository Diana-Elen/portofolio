import Contact from "./Contact"
import styles from "../style/Footer.module.css"

export default function Footer() {
    return<>
    <div className={styles.footer_container}>
        <Contact />
    </div>
    </>
}