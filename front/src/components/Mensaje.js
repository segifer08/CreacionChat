import styles from "@/components/Mensaje.module.css"

export default function Mensajito(props) {
    return (
        <>
            <div className={styles.mensaje}>
                <h6>{props.mail}</h6>
                <p>{props.text}</p>
            </div>
        </>
    )

}