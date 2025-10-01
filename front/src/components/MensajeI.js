import styles from "@/components/MensajeI.module.css"
export default function MensajeI(props) {

    return (
        <>
            <div className={styles.mensaje}>
                <h6>{props.mail}</h6>
                <p>{props.text}</p>
            </div>
        </>
    )

}