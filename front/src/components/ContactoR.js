"use client"

export default function ContactoR(props) {
    return (
        <>
            <div onClick={props.onClick} id={props.id}>
                <img src={props.url}></img>
                <h3>{props.mail}</h3>
            </div>
        </>
    )

}