"use client"

import ContactoR from "@/components/ContactoR"
import Mensaje from "@/components/Mensaje"
import { useSocket } from "@/hooks/useSocket"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function chat(){
    const [message, setMessage] = useState("");
    const [logued, setLogued] = useState(0)
    const [chatee, setChatee] = useState(0)
    const [chat, setChat] = useState([]);
    const [mensajes, setMensajes] = useState([]);
    const [linkedin, setLinkedin] = useState("");
    const [malquinequi, setMalquinequi] = useState("");
    const {socket, isConnected} = useSocket()
    const router = useRouter()
    
    useEffect(()=>{
    const loguedUser = localStorage.getItem("loguedUser")
    const selectedChat = localStorage.getItem("selectedChat")
    setLogued(parseInt(loguedUser))
    setChatee(parseInt(selectedChat))
    chatData(selectedChat)
  }, [])

    /* 
    useEffect(()=>{
         socket.on("newMessage", (data) => {console.log(data)})
    }, [])
    
    useEffect(()=>{
         socket.emit("joinRoom", {room: "pio"})
    }, [socket])

        
    */

    /*ACA VA UN FETCH*/
    function traerChat(datos){
        fetch("http://localhost:4000/chat",
        {
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(result =>{
            console.log(result)
            if (result.validar == true){
                console.log(result.chats)
                setChat(result.chats)
            } else {
                return alert("La Cagaste")
            }}
        )
    }

    function chatData(chat) {
    if(chat == undefined){
        return alert("Error, Faltan datos")
    }
    let datos = {
        id: chat
    }
    traerChat(datos)}

    
    function moverse() {
        router.push("../perfil")
    }

    return(
        <>
        {chat.length != 0 && <ContactoR
                onClick={moverse}
                id={chat[0].Id_Chat}
                url={chat[0].Imagen}
                mail={chat[0].Nombre}
            ></ContactoR> }
            {mensajes.map(mensaje => {
                    <Mensaje mail={mensaje.Mail} text={mensaje.text}></Mensaje>
                })
            }
        </>
    )
}