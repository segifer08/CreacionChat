"use client"

export default function Contacto(props) {
    return (
        <>
            <img src={props.url}></img>
            <h3>{props.mail}</h3>
        </>
    )

}