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
            <div className={styles.content}>      
                <div className={styles.contactol}>
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
                </div>
                    {mensajes.map(mensaje => {
                        <Mensajito mail={mensaje.Mail} text={mensaje.text}></Mensajito>
                    })
                    }
                        <Mensajito
                            className={styles.mensaje}
                            mail={"towa@gmail.com"}
                            text={"100 novias"}
                        ></Mensajito>
                        <InputM
                            className={styles.inpu}
                            text={"text"}
                            onClick={placeholer}
                            textb={"Enviar"}
                        ></InputM>
            </div>
        </>
    )
}