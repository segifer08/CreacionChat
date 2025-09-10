"use client"

import Button from "./Button"
import Input from "./Input"
import styles from "@/components/InputM.module.css"

export default function InputM(props) {
    
    return (
        <>  
            <input className={styles.inputm} type={props.text} onChange={props.onChange} value={props.value}></input>
            <Button
                onClick={props.onclick}
            ></Button>

        </>
    )

}