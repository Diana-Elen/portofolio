import styles from "../style/Contact.module.css"

export default function Contact() {
    return <>
    <div className={styles.contact_details}>
        <div className={styles.contact_data}>
            <p>diana.elena_dinu@yahoo.com</p>
        </div>
        <div className={styles.contact_data}>
            <p>Bucharest, Romania</p>
        </div>
        <div className={styles.contact_data}>
            <a href="https://github.com/Diana-Elen" target="_blank">github profile</a>
        </div>
    </div>
    </>
}