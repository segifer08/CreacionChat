"use client"

export default function ContactoR(props) {
    return (
        <>
            <div onClick={props.onClick} className={props.className}>
                <img src={props.url}></img>
                <h3>{props.mail}</h3>
            </div>
        </>
    )

}