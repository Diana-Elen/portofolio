import { forwardRef } from "react"
import styles from "../style/Skills.module.css"
import { Ref } from "react";

function Skills({text2}, ref) {
    return <>
    <div className={styles.skills_container} ref={ref}>{text2}
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
export default forwardRef(Skills);