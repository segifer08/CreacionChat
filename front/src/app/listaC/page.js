"use client"

/* Usuario pruebas
toplovetowa@gmail.com
TowaLove0909
*/

import ContactoR from "@/components/ContactoR"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function listaContactos(){
  let loguedUser = localStorage.getItem("loguedUser")
  const [logued, setLogued] = useState(loguedUser)
  const [contactos, setContactos] = useState([])
  const router = useRouter()

  useEffect(()=>{
    const loguedUser = localStorage.getItem("loguedUser")
    setLogued(loguedUser)
    console.log(logued);
    ids()
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

  function ids() {
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
    console.log(event.currentTarget.key)
    localStorage.setItem("selectedChat", event.currentTarget.key)
    // router.push("../chat")
  }

  return(
      <>
      <h1>Contactos:</h1>
        {contactos.length != 0 && contactos.map(contacto=>{
            console.log("contacto: ",contacto)
            if(contacto.Imagen == null && contacto.Es_Grupo == false){
              contacto.imagen = "https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png"
            } else if(contacto.Imagen == null && contacto.Es_Grupo == true){
              contacto.imagen = "https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"
            }
            return <ContactoR key={contacto.Id_Chat} onClick={moverse} mail={contacto.Nombre} url={contacto.Imagen}></ContactoR>
        })
        }
      </>
  )
}