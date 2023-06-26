import styles from "../style/Certificates.module.css"

export default function Certificates() {
    return <>
    <div className={styles.certificates_container}>
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