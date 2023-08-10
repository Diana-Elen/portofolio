import Image from "next/image"
import react from "../images/react-2.svg"

import css from "../images/css-3.svg"
import javascript from "../images/javascript-1.svg"
import bootstrap from "../images/react_bootstrap.svg"
import github from "../images/github.png"
import styles from "../style/Technologies.module.css"
import next_img from "../images/nextjs.svg"
import npm_logo from "../images/npm.png"
import { forwardRef, useState } from "react"
import Technology from "./Technology"
import html from "../images/html5-2.svg"



function Technologies({textteh}, ref) {
    const [activeIndex, setActiveIndex] = useState(0);

    return <>
    <div className={styles.technologies_container} ref={ref}>{textteh}
        <div className={styles.technologies_title}>
            Technologies
        </div>
        <div className={styles.technologies_group}>
            <Technology
                title="html"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            > 
            <Image src={html.src} height={40} width={40} alt="css image" className={styles.technology_image}></Image> 
            HTML stands for Hyper Text Markup Language                
            </Technology>

            <Technology
                title="css"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            > CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media                 
            <Image src={css.src} height={40} width={40} alt="css image" className={styles.technology_image}></Image>
            </Technology>

            <Image src={css.src} height={40} width={40} alt="css image" className={styles.technology_image}></Image>
            <Image src={javascript.src} height={40} width={40} alt="javascript image" className={styles.technology_image}></Image>
            <Image src={bootstrap.src} height={40} width={40} alt="bootstrap image" className={styles.technology_image}></Image>
            <Image src={react.src} height={40} width={40} alt="react image" className={styles.technology_image}></Image>
            <Image src={github.src} height={40} width={40} alt="github image" className={styles.technology_image}></Image>
            <Image src={next_img.src} height={40} width={40} alt="github image" className={styles.technology_image}></Image>
            <Image src={npm_logo.src} height={40} width={500} alt="github image" className={styles.technology_image}></Image>
        </div>
    </div>
    </>
}
export default forwardRef(Technologies);