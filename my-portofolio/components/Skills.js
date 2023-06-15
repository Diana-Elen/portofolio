import styles from "../style/Skills.module.css"

export default function Skills() {
    return <>
    <div className={styles.skills_container}>
        <p className={styles.skills_title}>Skills</p>
        <ul className={styles.skills_list}>
            <li>Responsive web design</li>
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Problem-solving</li>
            <li>Strong Communication</li>
            <li>Team player</li>
            <li>Attentive to details</li>
        </ul>
    </div>
    </>
}