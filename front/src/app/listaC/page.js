"use client"

import ContactoR from "@/components/ContactoR"

export default function listaContactos(){

    return(
        <>
          { contactos.map(contacto => {
            <ContactoR mail={contacto.mail} url={contacto.imagen}></ContactoR>
          })

          }
        </>
    )
}