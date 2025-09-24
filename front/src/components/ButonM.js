"use client"

import styles from "@/components/ButonM.module.css"

export default function ButtonM(props) {

    return (
        <>
            <button className={styles.buttonm} onClick={props.onClick}>{props.text}</button>
        </>
    )

}