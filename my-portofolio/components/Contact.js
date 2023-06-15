import styles from "../style/Contact.module.css"
import Image from "next/image"
import github from "../images/github.svg"

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
        <a href="https://github.com/Diana-Elen" target="_blank">
        <Image src={github.src} height={50} width={50}>
        </Image>
        </a>
            
        </div>
    </div>
    </>
}