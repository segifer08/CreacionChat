"use client"

import styles from "@/components/Input.module.css"

export default function Input(props) {
    
    return (
        <>  
            <input className={styles.input} type={props.type} onChange={props.onChange} value={props.value}></input>
        </>
    )

}