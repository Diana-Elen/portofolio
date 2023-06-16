import styles from "../style/Experience.module.css"
import Image from "next/image"
import flowershop from "../images/flowershop.jpg"
import candles_image from "../images/candles_website.jpg"
import iceland from "../images/iceland.jpg"

export default function Experience() {
    return <>
    <div>
        <p className={styles.experience_title}>experience</p>
        <div className={styles.experience_container}>
            <article className={styles.project}>
                <div>
                    <p className={styles.site_name}>Flower-shop website</p>
                    <p className={styles.site_description}>Final project at IT School, May 2023</p>
                    <ul>
                        <li>Responsive website</li>
                        <li>Technologies used: HTML, CSS, JavaScript, React, Next, Bootstrap</li>
                        <li><a href="https://diana-flower-shop.netlify.app/" target="_blank" >Diana's Flower shop</a></li>
                    </ul>
                </div>
                    <a href="https://diana-flower-shop.netlify.app/" target="_blank">
                    <Image height={300} width={300} src={flowershop.src} alt="flowershop">
                    </Image>
                    </a>
            </article>
            <article className={styles.project}>
                <div>
                <p className={styles.site_name}>HANDMADE CANDLES PRESENTATION WEBSITE</p>
                <p className={styles.site_description}>Intermediary project at IT school, March 2023</p>
                <ul>
                    <li>Responsive website</li>
                    <li>Technologies used: HTML, CSS (flex, grid), JavaScript</li>
                    <li><a href="https://handmade-candles-ignys.netlify.app/" target="_blank">Handmade candles presentation website</a></li>
                </ul>
                </div>
                <a href="https://handmade-candles-ignys.netlify.app/" target="_blank">
                    <Image height={300} width={300} src={candles_image.src} alt="flowershop">
                    </Image>
                </a>
            </article>
            <article className={styles.project}>
                <div>
                    <p className={styles.site_name}>ICELAND PRESENTATION WEBSITE</p>
                    <p className={styles.site_description}>Intermediate project at IT School, January 2023</p>
                    <ul>
                        <li>Responsive website</li>
                        <li>Techologies used: HTML, CSS (flex, grid)</li>
                        <li><a href="https://iceland-presentation-site.netlify.app/" target="_blank">Iceland presentation website</a></li>
                    </ul>
                </div>
                <a href="https://iceland-presentation-site.netlify.app/" target="_blank">
                    <Image height={300} width={300} src={iceland.src} alt="flowershop">
                    </Image>
                </a>
                
            </article>
        </div>
    </div>
    
    </>
}