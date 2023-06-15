
import styles from "../style/Navbar.module.css"

export default function Navbar() {
    const mybuttons=["about me", "skills", "technologies", "projects", "contact"];
    const Button = mybuttons.map((elem, index) => 
    <button key={index} 
            type="button" 
            className={styles.button_design}>
        {elem}
    </button>);
    return <>
        <div className={styles.navbar_buttons}>
            {Button}
        </div>
   </>
}