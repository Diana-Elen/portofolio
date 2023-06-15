import Image from "next/image"
import my_image from "../images/poza.jpg"
import styles from "../style/JobTitle.module.css"

export default function JobTitle() {
    return <>
    <div className={styles.job_container}>
        <div className={styles.name_title}>
            <p className={styles.name}>Diana-Elena Dinu</p>
            <p className={styles.job_title}>Front-end web developer</p>
        </div>
        <Image className={styles.image_dimension} src={my_image.src} width={100} height={100} alt="my image"></Image>
    </div>
    </>
}