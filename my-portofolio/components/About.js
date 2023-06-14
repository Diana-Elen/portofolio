import styles from "../style/About.module.css"
import Image from "next/image"
import my_image from "../images/poza.jpg"

export default function About() {
    return <>
    <div className={styles.description}>
        <p className={styles.about}>Hello, I'm Diana Dinu
        </p>
        <p>I’m passionate about front-end web development and I'vegraduated from the IT School course, 
            a 5 months of intense training,where I studied: HTML, CSS, JavaScript, React, Bootstrap.
            I am perseverent, hard-working and love to see the results of mywork. 
            I am familiar with the Agile methodology and would be happyto be part of a team where I can learn
            and develop my knowledge,while working on beautiful interactive websites.
        </p>
    </div>
        <Image src={my_image.src} width={300} height={300} alt="my image"></Image>

    
    
    </>
}