"use client"

import Button from "./Button";
import Input from "./Input";

export default function ContactoG(props) {
    return (
        <>
            <img src={props.url}></img>
            <div>
                <h4>Cambio de Imagen</h4>
                <Input type={props.type} onChange={props.onChange} value={props.value}></Input>
                <Button text={props.text} onClick={props.onClick}></Button>
            </div>
            <h3>{props.mail}</h3>
        </>
    )

}