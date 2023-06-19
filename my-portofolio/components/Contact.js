import styles from "../style/Contact.module.css"

export default function Contact() {
    return <>
    <div className={styles.contact_container}>
        <div className={styles.contact_data}>
            <p>diana.elena_dinu@yahoo.com</p>
        </div>
        <div className={styles.contact_data}>
            <p>Bucharest, Romania</p>
        </div>
    </div>
    </>
}

export function Button() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
  