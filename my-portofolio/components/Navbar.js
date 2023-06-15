import Button from "./Button";
import styles from "../style/Navbar.module.css"

export default function Navbar() {
    const mybuttons=["home", "despre mine", "tehnologii", "proiecte", "experienta"];
    const Button = mybuttons.map((elem, index) => <button key={index} type="button">{elem}</button>);
    return <>
    <div className={styles.navbar_buttons}>
       {Button}
    </div>
   </>
}