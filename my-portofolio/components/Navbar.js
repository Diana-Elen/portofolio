import Button from "./Button";
import styles from "../style/Navbar.module.css"

export default function Navbar() {
    const mybuttons=["home", "despre mine", "tehnologii", "proiecte", "experienta"];
    const renderButtons = mybuttons.map((button, index) => <div key={index}>{button}</div>);
    return <>
    <div className={styles.navbar_buttons}>
       {renderButtons}
    </div>
   </>
}