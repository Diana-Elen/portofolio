import styles from "../style/Education.module.css"

export default function Education() {
    return <>
    <div className={styles.education_container}>
        <div className={styles.education_title}>education</div>
        <div>
            <p className={styles.education_unit}>IT School - certification</p>
            <p className={styles.study}>Front-end web development course</p>
            <p className={styles.study}>dec.2022 - may 2023</p>
            <p className={styles.study}>The main technologies studied: HTML, CSS, JavaScript, React, Next, Git, Parcel, Canva, Figma.</p>
            <p className={styles.study}>I also promoted the Ministery of Education accreditation exam.</p>
        </div>
        <div>
            <p className={styles.education_unit}>POLITEHNICA UNIVERSITY OF BUCHAREST</p>
            <p className={styles.study}>Faculty of Transports, Master degree</p>
            <p className={styles.study}>2014</p>
        </div>
        <div>
            <p className={styles.education_unit}>POLITEHNICA UNIVERSITY OF BUCHAREST</p>
            <p className={styles.study}>Licence degree - Faculty of PowerEngineering</p>
            <p className={styles.study}>2003 - 2008</p>
        </div>
    </div>
    </>
}