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
import { useSocket } from "@/hooks/useSocket"
import MensajeI from "@/components/MensajeI"

export default function chat() {
    let i = 1000
    const loguedUser = localStorage.getItem("loguedUser")
    const selectedChat = localStorage.getItem("selectedChat")
    const [mensajito, setMensajito] = useState([]);
    const [message, setMessage] = useState([]);
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
        //socket.emit("joinRoom", {room: `chat ${selectedChat}`})
        console.log(selectedChat)
    }, []);

    /*function a(){
        socket.emit("joinRoom", {room: `chat ${selectedChat}`})
    }*/
    function b(){
        //socket.emit("pingAll", { msg: "Funcaaaaaaa porfaaaaaaaaaaaa" });
        const time = Date.now();
        const date = new Date(time);
        const currentDate = date.toISOString();
        const fechaMySQL = currentDate.slice(0, 19).replace('T', ' ');
        const newMessage = {id_Chat: chatee, id_User: logued, content: mensajito, date_time: fechaMySQL}
        console.log(newMessage)
        setMessage((prevMsg)=>{
            return [...prevMsg,newMessage]
        })
        socket.emit("sendMessage", newMessage);
        setMensajito("")

    }

    useEffect(()=>{
        if (!socket) return;
        socket.on("connect", ()=>{
            //corre una vez al conectar el socket con el back
            socket.emit("joinRoom", {room: `chat ${selectedChat}`})

        })
        socket.on("newMessage", (data) => {
            console.log("Hola; hasta aca llegue")
            console.log(data)
            /*Msj(selectedChat)
            UltMsj(selectedChat)*/
            const nuevoMensaje = data.message;
            setMnsajes(prev => [...prev, {
                id_mensaje: i+1,
                id_usuario: nuevoMensaje.id_User,
                content: nuevoMensaje.content,
                mail: nuevoMensaje.mail,
                date: nuevoMensaje.date_time,
                id_chat: nuevoMensaje.id_Chat
            }]);
            });
            console.log(mnsajes)
    }, [socket]);

    useEffect(()=>{
        console.log("isConnected:", isConnected)
    },[isConnected])

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

    function patra() {
        router.push("../listaC")
    }

    function corrobao(event){
        setMensajito(event.target.value)
        console.log(mensajito)
    }

    return (
        <>
          <div className={styles.content}>
            <div className={styles.contactol}>
                          <ButtonF
                              className={styles.botonf}
                              text={"<"}
                              onClick={patra}>
                          </ButtonF>
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
                          className={styles.contacto}
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
            </div>
            {mnsajes.length != 0 && mnsajes.map(mensaje => (
                
                mensaje.id_usuario == loguedUser ?
                    (<Mensaje key={mensaje.id_mensaje} mail="Tú" text={mensaje.content}></Mensaje>)
                    :
                    (<MensajeI key={mensaje.id_mensaje} mail={mensaje.mail} text={mensaje.content}> </MensajeI>)

            ))
            }
            <InputM
                className={styles.inpu}
                onChange={corrobao}
                value={mensajito}
                text={"text"}
                onClick={b}
                textb={"Enviar"}
            ></InputM>
          </div>
        </>
    )
}