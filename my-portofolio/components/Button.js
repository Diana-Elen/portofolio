import styles from "../style/Button.module.css"

export default function Button({button}) {
    return <>
    <button type="button" className={styles.button_design}>
        {button}
    </button>
    </>
}