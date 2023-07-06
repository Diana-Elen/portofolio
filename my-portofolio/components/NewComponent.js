import { forwardRef } from "react";
import styles from "../style/NewComponent.module.css"

function NewComponent({text},ref) {

    return <>
    <h2 className={styles.h2com} ref={ref}>{text}</h2></>

}

export default forwardRef(NewComponent);