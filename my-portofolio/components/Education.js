import styles from "../style/Education.module.css"

export default function Education() {
    return <>
    <div>
        <p className={styles.education_unit}>IT School - certification</p>
        <p className={styles.study}>Front-end web development course</p>
        <p className={styles.study}>dec.2022 - may 2023</p>
        <p className={styles.study}>The main technologies studied: HTML, CSS, JavaScript, React, Next, Git, Parcel, Canva, Figma.</p>
        <p className={styles.study}>I also promoted the Ministery of Education accreditation exam.</p>
    </div>
    </>
}