import Button from "./Button";
import styles from "../style/Navbar.module.css"

export default function Navbar() {
    return <>
    <div className={styles.navbar_buttons}>
    <Button />
    <Button />
    <Button />
    <Button />
    </div>
   </>
}