'use client'

import styles from "@/components/Form.module.css"
import Button from "./Button"
import Input from "./Input"

export default function Form(props) {
    return(
        <>
            <div className={styles.content}>
                <h1 className={styles.titulo}>{props.texth1}</h1>
                <h4 className={styles.h4}>Mail</h4>
                <Input type={props.type1} onChange={props.onChange1} value={props.value1}></Input>
                <h4 className={styles.h4}>Password</h4>
                <Input type={props.type2} onChange={props.onChange2} value={props.value2}></Input>
                <br></br>
                <Button text={props.textb} onClick={props.onClick}></Button>
                <br></br>
                <br></br>
                <Button text={props.text} onClick={props.mover}></Button>
            </div>
        </>
    )
}