"use client"

import styles from "@/components/Button.module.css"
export default function Button(props) {

    return (
        <>
            <button id={props.id} className={styles.button} onClick={props.onClick}>{props.text}</button>
        </>
    )

}