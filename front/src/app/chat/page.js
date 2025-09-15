"use client"

import ContactoR from "@/components/ContactoR"
import Mensajito from "@/components/Mensaje"
import { useSocket } from "@/hooks/useSocket"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function chat(){
    const [message, setMessage] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const [linkedin, setLinkedin] = useState("");
    const [malquinequi, setMalquinequi] = useState("");
    const [socket, isConnected] = useSocket
    const router = useRouter()

    /*ACA VA UN FETCH*/

    /* 
    useEffect(()=>{
         socket.on("newMessage", (data) => {console.log(data)})
    }, [])
    
    useEffect(()=>{
         socket.emit("joinRoom", {room: "pio"})
    }, [socket])

        
    */
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