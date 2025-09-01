"use client"

import styles from "@/components/Button.module.css"
export default function Button(props) {

    return (
        <>
            <button className={styles.button} onClick={props.onClick}>{props.text}</button>
        </>
    )

}