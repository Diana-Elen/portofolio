import styles from "../style/Button.module.css"

export default function Button({element}) {
    return <>
    <button type="button" className={styles.button_design}>
        {element}
    </button>
    </>
}