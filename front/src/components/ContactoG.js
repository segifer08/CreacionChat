"use client"

import Button from "./Button";
import Input from "./Input";
import styles from "./ContactoG.module.css"

export default function ContactoG(props) {
    return (
        <>
            <div className={styles.contactog}>
                <img src={props.url}></img>
                <div className={styles.contactogtexto}>
                    <h4>Cambio de Imagen</h4>
                    <Input type={props.type} onChange={props.onChange} value={props.value}></Input>
                    <Button text={props.text} onClick={props.onClick}></Button>
                </div>
                <h3>{props.mail}</h3>
            </div>
        </>
    )

}