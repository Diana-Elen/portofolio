import styles from "../style/Form.module.css"


export default function Form() {
    return <>
        <div className={styles.background}>
            <form className={styles.contact_form} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <h1 className={styles.title}>Contact me</h1>
                <label className={styles.form_group}>
                    Name
                    <input type="text" name="name" placeholder="Name" required/>
                </label>
                <label className={styles.form_group}>
                    Email
                    <input type="email" name="email" placeholder="user@domain.ext" required/>
                </label>
                <label className={styles.form_group}>
                    Message
                <textarea placeholder="Contact us" name="message" required>
                </textarea>
                </label>
                <div className={styles.checkbox_group}>
                    <input type="checkbox" id="val1" name="accept" required/>
                    <label>I read the terms and conditions</label>
                </div>
                <div className={styles.btn_group}>
                    <button className={styles.button_style} type="reset" value="Reset the form">Reset the form</button>
                    <button className={styles.button_style} type="submit" id="submit" value="Send">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </>
}