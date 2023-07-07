import { forwardRef } from "react"
import styles from "../style/Certificates.module.css"

function Certificates ({textcertif}, ref) {
    return <>
    <div className={styles.certificates_container} ref={ref}>{textcertif}
        <p className={styles.certificates_title}>
            Certificates
        </p>
        <div className={styles.certificates_group}>
            <p className={styles.certificates}>IT School certification</p>
            <p className={styles.certificates}>Ministery of Education certification</p>
        </div>
    </div>    
    </>
}
export default forwardRef(Certificates);