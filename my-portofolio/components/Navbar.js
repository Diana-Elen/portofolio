
import styles from "../style/Navbar.module.css"
import Image from "next/image"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.png"

export default function Navbar() {
    const mybuttons=["about me", "skills", "technologies", "projects", "contact"];
    const Button = mybuttons.map((elem, index) => 
    <button key={index} 
            type="button" 
            className={styles.button_design}>
        {elem}
    </button>);
    return <>
    
    <div className={styles.navbar_group}>
        <div className={styles.contact_links}>
            <a href="https://www.linkedin.com/feed/" target="_blank">
                <Image src={linkedin.src} height={50} width={50} className={styles.linkedin} alt="linkedin image">
                </Image>
            </a>          
            <a href="https://github.com/Diana-Elen" target="_blank">
                <Image src={github.src} height={50} width={50} className={styles.github} alt="github image">
                </Image>
            </a>
            <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Menu</button>
            <div className={styles.dropdown_content}>
                <a href="/About">About me</a>
                <a href="./#Skills">Skills</a>
                <a href="#">Technologies</a>
                <a href="#">Experience</a>
                <a href="#">Technologies</a>
            </div>
    </div>
        </div>
        <div className={styles.navbar_buttons}>
                {Button}
        </div>
    </div>
        
   </>
}