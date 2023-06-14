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
            <p>https://github.com/Diana-Elen</p>
        </div>
    </div>
    </>
}