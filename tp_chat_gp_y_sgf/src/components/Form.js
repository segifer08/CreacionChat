'use client'

import Button from "./Button"
import Input from "./Input"

export default function Form(props) {
    return(
        <>
            <h1>Inciar Sesión</h1>
            <h4>Mail:</h4>
            <Input type={props.type1} onChange={props.onChange2}></Input>
            <h4>Password</h4>
            <Input type={props.type2} onChange={props.onChange3}></Input>
            <br></br>
            <Button text={props.text} onClick={props.onClick}></Button>
        </>
    )
}