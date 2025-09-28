
import styles from "@/components/Mensaje.module.css"
export default function Mensaje(props) {

    return (
        <>
            <div className={styles.mensaje}>
                <h6>{props.mail}</h6>
                <p>{props.text}</p>
            </div>
        </>
    )

}