import styles from "../style/Form.module.css"


export default function Form() {
    return <>
        <form className={styles.background} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <h1 className={styles.title}>Contact me</h1>
            <label className={styles.form_group}>
                Name
                <input className={styles.text_input} type="text" name="name" placeholder="Name" required/>
            </label>
            <label className={styles.form_group}>
                Email
                <input className={styles.text_input}  type="email" name="email" placeholder="user@domain.ext" required/>
            </label>
            <label className={styles.form_group}>
                Message
            <textarea className={styles.textarea} placeholder="Contact us" name="message" required>
            </textarea>
            </label>
            <div className={styles.btn_group}>
                <button className={styles.button_style} type="reset" value="Reset the form">Reset the form</button>
                <button className={styles.button_style} type="submit" id="submit" value="Send">
                    Send
                </button>
            </div>
        </form>
    </>
}