import Image from "next/image"
import react from "../images/react-2.svg"
import html from "../images/html5-2.svg"
import css from "../images/css-3.svg"
import javascript from "../images/javascript-1.svg"
import bootstrap from "../images/bootstrap-5-1.svg"
import styles from "../style/Technologies.module.css"

export default function Technologies() {
    return <>
    <div className={styles.technologies_title}>
        Technologies
    </div>
    <div className={styles.technologies_container}>
        <Image src={html.src} height={60} width={60} alt="linkedin image"></Image>
        <Image src={css.src} height={60} width={60} alt="linkedin image"></Image>
        <Image src={javascript.src} height={60} width={60} alt="linkedin image"></Image>
        <Image src={bootstrap.src} height={60} width={60} alt="linkedin image"></Image>
        <Image src={react.src} height={60} width={60} alt="linkedin image"></Image>
    </div>
    
    </>
}