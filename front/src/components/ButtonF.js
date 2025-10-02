"use client"

import styles from "@/components/ButtonF.module.css"
export default function ButtonF(props) {

    return (
        <>
            <button className={styles.button} onClick={props.onClick}>{props.text}</button>
        </>
    )

}