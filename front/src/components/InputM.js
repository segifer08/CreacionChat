"use client"

import ButtonM from "./ButonM"
import Button from "./Button"
import Input from "./Input"
import styles from "@/components/InputM.module.css"

export default function InputM(props) {
    
    return (
        <>  
            <input className={styles.inputm} type={props.text} onChange={props.onChange} value={props.value}></input>
            <ButtonM
                className={styles.boton2}
                onClick={props.onclick}
                text={props.textb}
            ></ButtonM>

        </>
    )

}