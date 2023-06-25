import styles from "../style/Experience.module.css"
import Image from "next/image"
import flowershop from "../images/flowershop.webp"
import flowershop2 from "../images/flowershop2.webp"
import candles_image from "../images/candles_website.webp"
import candles_website2 from "../images/candles_website2.webp"
import iceland from "../images/iceland.webp"
import iceland2 from "../images/iceland2.webp"
import { useState } from "react"

export default function Experience() {
    const [imageSrc, setImageSrc] = useState(flowershop);
    const changeImageSrc = () => {
      setImageSrc(flowershop2);
    }
    const returnImageSrc = () => {
        setImageSrc(flowershop);
      }

    const [imageSrc2, setImageSrc2] = useState(candles_image);
    const changeImageSrc2 = () => {
    setImageSrc2(candles_website2);
    }
    const returnImageSrc2 = () => {
        setImageSrc2(candles_image);
    }

    const [imageSrc3, setImageSrc3] = useState(iceland);
    const changeImageSrc3 = () => {
    setImageSrc3(iceland2);
    }
    const returnImageSrc3 = () => {
        setImageSrc3(iceland);
    }
      
    return <>
    <div className={styles.experience_container}>
        <p className={styles.experience_title}>experience</p>
            <article className={styles.project}>
                <div>
                    <a href="https://diana-flower-shop.netlify.app/" target="_blank" className={styles.site_name}>
                        Diana's Flower shop
                    </a>
                    <p className={styles.site_description}>Final project at IT School, May 2023</p>
                    <ul>
                        <li>Responsive website</li>
                        <li>Technologies used: HTML, CSS, JavaScript, React, Next, Bootstrap</li>
                    </ul>
                </div>
                    <a href="https://diana-flower-shop.netlify.app/" target="_blank">
                    <Image 
                    height={300} 
                    width={300} 
                    src={imageSrc} 
                    onMouseOver={changeImageSrc}
                    onMouseLeave={returnImageSrc}
                    className={styles.website_image} 
                    alt="flowershop">
                    </Image>
                    </a>
            </article>
            <article className={styles.project}>
                <div>
                <a href="https://handmade-candles-ignys.netlify.app/" target="_blank" className={styles.site_name}>
                    Handmade candles presentation website
                </a>
                <p className={styles.site_description}>Intermediary project at IT school, March 2023</p>
                <ul>
                    <li>Responsive website</li>
                    <li>Technologies used: HTML, CSS (flex, grid), JavaScript</li>
                </ul>
                </div>
                <a href="https://handmade-candles-ignys.netlify.app/" target="_blank">
                    <Image 
                    height={300} 
                    width={300} 
                    src={imageSrc2} 
                    onMouseOver={changeImageSrc2}
                    onMouseLeave={returnImageSrc2}
                    className={styles.website_image} 
                    alt="flowershop">
                    </Image>
                </a>
            </article>
            <article className={styles.project}>
                <div>
                    <a href="https://iceland-presentation-site.netlify.app/" target="_blank" className={styles.site_name}>
                        Iceland presentation website
                    </a>
                    <p className={styles.site_description}>Intermediate project at IT School, January 2023</p>
                    <ul>
                        <li>Responsive website</li>
                        <li>Techologies used: HTML, CSS (flex, grid)</li>
                    </ul>
                </div>
                <a href="https://iceland-presentation-site.netlify.app/" target="_blank">
                    <Image 
                    height={300} 
                    width={300} 
                    src={imageSrc3} 
                    onMouseOver={changeImageSrc3}
                    onMouseLeave={returnImageSrc3}
                    className={styles.website_image} 
                    alt="flowershop">
                    </Image>
                </a>
            </article>
            <div className={styles.wokplace_container}>
                <article className={styles.workplace}>
                    <div>
                        <p className={styles.site_name}>
                            AKKA TECHNOLOGIES SRL - BUCHAREST, ROMANIA
                        </p>
                        <p className={styles.site_description}>Sept 2018 - present</p>
                        <ul>
                            <li>Work in the automotive vehicle engineering field, in the development of new vehicles, on keyroles: 
                                package automotive engineer, manufacturing team project manager
                            </li>
                            <li>Worked on Agile projects, where I also had the additional roles of 
                                Product Owner / Scrum Master / Workpackage team leader, where I had to 
                                lead teams with mixed competencies (teams of 10-17 persons)
                            </li>
                        </ul>
                    </div>
                </article>
                <article className={styles.workplace}>
                    <div>
                        <p className={styles.site_name}>
                            ENVISAGE GROUP LTD COMPANY - COVENTRY, UK
                        </p>
                        <p className={styles.site_description}>Sept 2016 - Sept 2018</p>
                        <ul>
                            <li>Worked for Jaguar and London Taxi Vehicle, as package vehicle engineer
                            </li>
                            <li>I was based in UK and had to manage a team of 4-5 persons from India 
                                and present the work results on a weekly basis to the client from UK
                            </li>
                        </ul>
                    </div>
                </article>
                <article className={styles.workplace}>
                    <div>
                        <p className={styles.site_name}>
                            RENAULT GROUP - ROMANIA, FRANCE, MAROCCO
                        </p>
                        <p className={styles.site_description}>Sept 2008 - Sept 2016</p>
                        <ul>
                            <li>I worked on several roles, on multiple automotive projects, in an international team 
                            </li>
                            <li>I spent 6 months in France and 1 year in Marocco, at the Renault Tangier plant
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
    </div>
    </>
}