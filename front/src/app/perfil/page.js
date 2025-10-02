"use client"

import ButtonF from "@/components/ButtonF"
import ContactoG from "@/components/ContactoG"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function perfil(){
    let loguedUser = localStorage.getItem("loguedUser")
    const selectedChat = localStorage.getItem("selectedChat")
    const router = useRouter()
    const [logued, setLogued] = useState(null)
    const [chatee, setChatee] = useState(null)
    const [linkedin, setLinkedin] = useState(null)
    const [malquinequi, setMalquinequi] = useState("")
    const [cambiazo, setCambiazo] = useState("")

    useEffect(()=>{
        const loguedUser = localStorage.getItem("loguedUser")
        const selectedChat = localStorage.getItem("selectedChat")
        setChatee(parseInt(selectedChat))
        console.log(selectedChat);
        perfilado(selectedChat)
      }, [])
    /*ACA VA UN FETCH*/
    function perfil(datos){
        fetch("http://localhost:4000/perfil",{   
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(result =>{
            if (result.validar == true){
                console.log(result.chat)
                setLinkedin(result.chat[0].Imagen)
                console.log(result.chat[0].Es_Grupo)
                if(linkedin == null && result.chat[0].Es_Grupo == true){
                    setLinkedin("https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg")
                } else if (linkedin == null && result.chat[0].Es_Grupo == false){
                    setLinkedin("https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png")
                }
                setMalquinequi(result.chat[0].Nombre)
            } else {
                return alert("La Cagaste")
            }
        }
        )
  }

    function perfilado(chat) {
        if(chat == undefined){
            return alert("Error Faltan datos")
        }
        console.log()
        let datos = {
            id: chat
        } 
        perfil(datos)
    }

    // fetch de cambio imagen

    function imagen(datos){
        fetch("http://localhost:4000/imagenP",{   
            method:"PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(result =>{
            if (result.validar == true){
                return alert("Imagen cambiada con exito") 
            } else {
                return alert("La Cagaste")
            }
        }
        )
  }

    function cambio() {
        if(logued == undefined){
            return ui.showModal("Error", "Faltan datos")
        }
        console.log(cambiazo)
        console.log(logued)
        let datos = {
            imagen: cambiazo,
            id: logued
        } 
        imagen(datos)
    }

    function corrobao(event){
        console.log(cambiazo)
        setCambiazo(event.target.value)
    }

  function moverse(){
    router.push("../chat")
  }

    return(
        <>
            <ButtonF
            text={"<"}
            onClick={moverse}></ButtonF>
            <ContactoG
                url={linkedin}
                mail={malquinequi}
            ></ContactoG>
        </>
    )
}