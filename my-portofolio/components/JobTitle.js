import Image from "next/image"
import my_image from "../images/poza.png"
import styles from "../style/JobTitle.module.css"

export default function JobTitle() {
    return <>
    <div className={styles.job_container}>
        <div className={styles.name_title}>
            <p className={styles.hello}>Hello, I'm Diana-Elena Dinu
            </p>
            <p className={styles.job_title}>Front-end web developer</p>
        </div>
        <Image className={styles.image_dimension} src={my_image.src} width={200} height={200} alt="my image"></Image>
    </div>
    </>
}