"use client"

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
    datosLista()
  }, [])

  function lista(){
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
      console.log(result.usuarios)
      if (result.validar == true){
          setContactos(result.chat)
      } else {
          return alert("La Cagaste")
      }}
    )
  }

  function datosLista() {
    if(logued == undefined){
        return alert("Error, Faltan datos")
    } else {
      lista()
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
              if(contacto.imagen == null && contacto.Es_Grupo == false){
                contacto.imagen = "https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png"
              } else if(contacto.imagen == null && contacto.Es_Grupo == true){
                contacto.imagen = "https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"
              }
              return <ContactoR key={contacto.Id_Usuario} onClick={moverse} mail={contacto.Mail} url={contacto.imagen}></ContactoR>
          }
          )
          }
        </>
    )
}