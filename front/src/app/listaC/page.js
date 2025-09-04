"use client"

import styles from "@/app/listaC/contactos.module.css"
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

  function lista(datos){
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
          setContactos(result.usuarios)
      } else {
          return alert("La Cagaste")
      }}
    )
  }

  function datosLista() {
  if(logued == undefined){
      return ui.showModal("Error", "Faltan datos")
  }
  console.log(logued)
  let datos = {
      id: logued

  }
  lista(datos)}

  function moverse(){
    router.push("../chat")
  }

    return(
        <>

        <h1>Contactos:</h1>
          {contactos.length != 0 && contactos.map(contacto=>{
              console.log("contacto: ",contacto)
              if(contacto.imagen == null){
                contacto.imagen = "https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"
              }
              return <ContactoR key={contacto.Id_Usuario} onClick={moverse} mail={contacto.Mail} url={contacto.imagen}></ContactoR>
          }
          )
          }
        </>
    )
}

/*{ contactos.map(contacto => {
  <ContactoR mail={contacto.mail} url={contacto.imagen}></ContactoR>
})

}*/