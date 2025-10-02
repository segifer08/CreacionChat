"use client"

import Button from "./Button";
import Input from "./Input";
import styles from "./ContactoG.module.css"

export default function ContactoG(props) {
    return (
        <>
            <div className={styles.contactog}>
                <img src={props.url}></img>
                <h2>{props.mail}</h2>
            </div>
        </>
    )

}