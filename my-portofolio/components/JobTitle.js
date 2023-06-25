import Image from "next/image"
import my_image from "../images/poza.png"
import abstract from "../images/abstract.png"
import styles from "../style/JobTitle.module.css"
import { useState } from "react"

export default function JobTitle() {
    const [imageSrc, setImageSrc] = useState(my_image);

    // Function to change the image source
    const changeImageSrc = () => {
      setImageSrc(abstract);
    }
    return <>
    <div className={styles.job_container}>
        <div className={styles.name_title}>
            <p className={styles.hello}>Hello, 
            </p>
            <p className={styles.hello}>I'm Diana-Elena Dinu</p>
            <p className={styles.job_title}>Front-end web developer</p>
        </div>
        {/*<Image className={styles.image_dimension} 
            src={imageSrc} 
            width={200} 
            height={200} 
            alt="my image">
            </Image>
        <button onClick={changeImageSrc}>press</button> */}
        <Image className={styles.image_dimension}
        src={imageSrc} 
        alt="my img" 
        height={200} 
        width={200} />
        <button onClick={changeImageSrc}>Change Image</button>
    </div>
    </>
}