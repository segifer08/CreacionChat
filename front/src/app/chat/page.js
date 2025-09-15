"use client"

import ContactoR from "@/components/ContactoR"
import Mensajito from "@/components/Mensaje"
import { useRouter } from "next/navigation"
import Input from "@/components/Input"
import { useState } from "react"
import InputM from "@/components/InputM"
import styles from "@/app/chat/chat.module.css"

export default function chat(){
    const [mensajes, setMensajes] = useState([])
    const [linkedin, setLinkedin] = useState("")
    const [malquinequi, setMalquinequi] = useState("")
    const router = useRouter()

    /*ACA VA UN FETCH*/
    function moverse() {
        router.push("../perfil")
    }

    function placeholer(){
        console.log("61L")
    }

    return(
        <>
            <ContactoR
                className={styles.contacto}
                onClick={moverse}
                url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}
                mail={"malquinequi"}
            ></ContactoR>
            {mensajes.map(mensaje => {
                    <Mensajito mail={mensaje.Mail} text={mensaje.text}></Mensajito>
                })
            }
            <InputM
                className={styles.inpu}
                text={"text"}
                onClick={placeholer}
                textb={"Enviar"}
            ></InputM>
        </>
    )
}