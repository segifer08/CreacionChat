"use client"

/* Usuario pruebas
toplovetowa@gmail.com
TowaLove0909
*/

import ContactoR from "@/components/ContactoR"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const test = [0,1]

export default function listaContactos(){
  const [logued, setLogued] = useState(0)
  const [contactos, setContactos] = useState([])
  const router = useRouter()

  useEffect(()=>{
    const loguedUser = localStorage.getItem("loguedUser")
    setLogued(parseInt(loguedUser))
    ids(loguedUser)
  }, [])

  function idsChat(datos){
    fetch("http://localhost:4000/contactos",
    {
      method:"POST", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(result =>{



      if (result.validar == true){
          console.log(result.chats)
          setContactos(result.chats)
      } else {
          return alert("La Cagaste")
      }}
    )
  }

  function ids(logued) {
    if(logued == undefined){
        return alert("Error, Faltan datos")
    } else {
      let datos = {
        id: logued
    }
      idsChat(datos)
    }
  }

  function moverse(event){
    console.log(event.currentTarget.id)
    localStorage.setItem("selectedChat", event.currentTarget.id)
    router.push("../chat")
  }

  return(
      <>
      <h1>Contactos:</h1>
        {contactos.length != 0 && contactos.map((contacto, index)=>{
            console.log("contacto: ",contacto)
            if(contacto.Imagen == null && contacto.Es_Grupo == false){
              contacto.Imagen = "https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png"
            } else if(contacto.Imagen == null && contacto.Es_Grupo == true){
              contacto.Imagen = "https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"
            }
            return (
              <ContactoR  
                key={index}
                id={contacto.Id_Chat}
                onClick={moverse} 
                mail={contacto.Nombre} url={contacto.Imagen}></ContactoR>
          )
        })
        }
      </>
  )
}