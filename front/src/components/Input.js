"use client"

<<<<<<< HEAD
import styles from "@/components/Input.module.css"

export default function Input(props) {
=======
import { useState } from "react"
>>>>>>> b4b0205d2fc12dcb60f38acd6a826fc56d555ef9

export default function Input(props) {
    
    return (
        <>
<<<<<<< HEAD
            <input className={styles.input} type={props.type} onChange={props.onChange}></input>
=======
            <input type={props.type} onChange={props.onChange} value={props.value} ></input>
>>>>>>> b4b0205d2fc12dcb60f38acd6a826fc56d555ef9
        </>
    )

}