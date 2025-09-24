"use client"

export default function ContactoR(props) {
    return (
        <>
            <div onClick={props.onClick} id={props.id} className={props.className}>

                <img src={props.url}></img>
                <h3>{props.mail}</h3>
            </div>
        </>
    )

}