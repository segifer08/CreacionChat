"use client"

import styles from "@/app/listaC/contactos.module.css"
import ContactoR from "@/components/ContactoR"

export default function listaContactos(){

    return(
        <>
          <div className={styles.lista}>
            { contactos.map(contacto => {
              <ContactoR mail={contacto.mail} url={contacto.imagen}></ContactoR>
            })

            }
          </div>
        </>
    )
}