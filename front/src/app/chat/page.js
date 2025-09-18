"use client"

import ContactoR from "@/components/ContactoR"
import Mensajito from "@/components/Mensaje"
import { useRouter } from "next/navigation"
import { useState } from "react"
import InputM from "@/components/InputM"
import styles from "@/app/chat/chat.module.css"
import ButtonF from "@/components/ButtonF"

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
            <div className={styles.contener}>
                <div className={styles.div}>
                    <ButtonF
                        className={styles.botonf}
                        text={"<"}
                    >
                    </ButtonF>
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
                </div>
                <Mensajito
                    className={styles.mensaje}
                    mail={"towa@gmail.com"}
                    text={"100 novias, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                ></Mensajito>
            </div>
            <InputM
                className={styles.inpu}
                text={"text"}
                onClick={placeholer}
                textb={"Enviar"}
            ></InputM>
        </>
    )
}