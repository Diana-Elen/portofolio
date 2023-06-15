import Image from "next/image"
import my_image from "../images/poza.jpg"
import styles from "../style/JobTitle.module.css"

export default function JobTitle() {
    return <>
    <div className={styles.job_container}>
        <div>
            <p className={styles.name}>Diana-Elena Dinu</p>
            <p className={styles.job_title}>Front-end web developer</p>
        </div>
        
        <Image className={styles.image_dimension} src={my_image.src} width={300} height={300} alt="my image"></Image>

    </div>
    
    </>
}