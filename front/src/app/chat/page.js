"use client"

import ContactoR from "@/components/ContactoR"
import Mensajito from "@/components/Mensaje"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function chat(){
    const [mensajes, setMensajes] = useState([])
    const [linkedin, setLinkedin] = useState("")
    const [malquinequi, setMalquinequi] = useState("")
    const router = useRouter()

    /*ACA VA UN FETCH*/
    function moverse() {
        router.push("../perfil")
    }

    return(
        <>
            <ContactoR
                onClick={moverse}
                url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}
                mail={"malquinequi"}
            ></ContactoR>
            {mensajes.map(mensaje => {
                    <Mensajito mail={mensaje.Mail} text={mensaje.text}></Mensajito>
                })
            }
        </>
    )
}