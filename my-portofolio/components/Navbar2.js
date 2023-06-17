import styles from "../style/Navbar2.module.css"

export default function Navbar2() {
    return <>
    <div className={styles.dropdown}>
        <button class={styles.dropbtn}>Menu</button>
        <div class={styles.dropdown_content}>
            <a href="#">About me</a>
            <a href="#">Skills</a>
            <a href="#">Technologies</a>
        </div>
    </div>

    
    </>
}

