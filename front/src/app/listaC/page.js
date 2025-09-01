"use client"

import ContactoR from "@/components/ContactoR"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function listaContactos(){
  const [contactos, setContactos] = useState([])
  const router = useRouter()

  /*fetch("http://localhost:4000/login",
          {
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(datos)
          }
          )
          .then(response => response.json())
          .then(result =>{
              //if
              console.log(result)
              localStorage.setItem("loguedUser", result.log[0])
              router.replace("../listaC")
          })*/

  function moverse(){
    router.push("../chat")
  }

    return(
        <>
          {contactos.map(contacto => {
            <ContactoR onClick={moverse} mail={contacto.mail} url={contacto.imagen}></ContactoR>
          })
          }
        </>
    )
}