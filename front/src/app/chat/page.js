"use client"

/* Usuario pruebas
toplovetowa@gmail.com
TowaLove0909
*/

import ContactoR from "@/components/ContactoR"
import Mensaje from "@/components/Mensaje"
import InputM from "@/components/InputM"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/app/chat/chat.module.css"
import ButtonF from "@/components/ButtonF"
import Button from "@/components/Button"
import { useSocket } from "@/hooks/useSocket"

export default function chat() {
    const loguedUser = localStorage.getItem("loguedUser")
    const selectedChat = localStorage.getItem("selectedChat")
    const [message, setMessage] = useState("");
    const [logued, setLogued] = useState(0)
    const [chatee, setChatee] = useState(0)
    const [chat, setChat] = useState([]);
    const [mnsajes, setMnsajes] = useState([]);
    const {isConnected, socket} = useSocket();
    const router = useRouter()

    useEffect(() => {
        const loguedUser = localStorage.getItem("loguedUser")
        const selectedChat = localStorage.getItem("selectedChat")
        setLogued(parseInt(loguedUser))
        setChatee(parseInt(selectedChat))
        chatData(selectedChat)
        Msj(selectedChat)
        console.log("socket:", socket)
    }, []);

    function a(){
        socket.emit("joinRoom", {room: `chat ${selectedChat}`})
    }
    function b(){
        //socket.emit("pingAll", { msg: "Funcaaaaaaa porfaaaaaaaaaaaa" });
        const time = Date.now();
        const date = new Date(time);
        const currentDate = date.toISOString();
        const fechaMySQL = currentDate.slice(0, 19).replace('T', ' ');

        socket.emit("sendMessage", {
            id_Chat: chatee,
            id_User: logued,
            content: message,
            date_time: fechaMySQL
        });

    }

    useEffect(()=>{
        if (!socket) return;
        socket.on("newMessage", (data) => {
            console.log(data)
            Msj(selectedChat)}
            )
        //console.log("isConnected:", isConnected)
    }, [isConnected]);

    /*ACA VA UN FETCH*/

    function traerChat(datos) {
        fetch("http://localhost:4000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.validar == true) {
                    console.log(result.chats)
                    setChat(result.chats)
                } else {
                    return alert("La Cagaste")
                }
            }
            )
    }

    function chatData(chat) {
        if (chat == undefined) {
            return alert("Error, Faltan datos")
        }
        let datos = {
            id: chat
        }
        traerChat(datos)
    }

     function traerMsj(datos) {
        fetch("http://localhost:4000/mensajes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.validar == true) {
                    console.log(result.mensajes)
                    setMnsajes(result.mensajes)
                } else {
                    return alert("La Cagaste")
                }
            }
            )
    }

    function Msj(chat) {
        if (chat == undefined) {
            return alert("Error, Faltan datos")
        }
        let datos = {
            id: chat
        }
        traerMsj(datos)
    }


    function moverse() {
        router.push("../perfil")
    }

    function corrobao(event){
        setMessage(event.target.value)
        console.log(message)
    }

    return (
        <>
            {chat.length != 0 && chat[0].Es_Grupo == true && chat[0].Imagen == null &&
                <ContactoR
                    onClick={moverse}
                    id={chat[0].Id_Chat}
                    url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}
                    mail={chat[0].Nombre}
                ></ContactoR>
            }
            {chat.length != 0 && chat[0].Es_Grupo == false && chat[0].Imagen == null &&
                <ContactoR
                    onClick={moverse}
                    id={chat[0].Id_Chat}
                    url={"https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png"}
                    mail={chat[0].Nombre}
                ></ContactoR>
            }
            {chat.length != 0 && chat[0].Es_Grupo == true && chat[0].Imagen != null &&
                <ContactoR
                    onClick={moverse}
                    id={chat[0].Id_Chat}
                    url={chat[0].Imagen}
                    mail={chat[0].Nombre}
                ></ContactoR>
            }
            {chat.length != 0 && chat[0].Es_Grupo == false && chat[0].Imagen != null &&
                <ContactoR
                    onClick={moverse}
                    id={chat[0].Id_Chat}
                    url={chat[0].Imagen}
                    mail={chat[0].Nombre}
                ></ContactoR>
            }
            {mnsajes.length != 0 && mnsajes.map(mensaje => {
                return (
                    <Mensaje key={mensaje.id_mensaje} mail={mensaje.mail} text={mensaje.content}></Mensaje>
                )
            })
            }
            <InputM
                className={styles.inpu}
                onChange={corrobao}
                value={message}
                text={"text"}
                onClick={b}
                textb={"Enviar"}
            ></InputM>
            <Button text={"asda"} onClick={a}></Button>
        </>
    )
}