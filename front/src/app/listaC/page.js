"use client"

import styles from "@/app/listaC/contactos.module.css"
import ContactoR from "@/components/ContactoR"

export default function listaContactos(){

    return(
        <>
          <div className={styles.lista}>
            <div className={styles.contacto}>
              <ContactoR mail={"Towa"} url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}></ContactoR>
            </div>
            <div className={styles.contacto}>
              <ContactoR mail={"Tsuna Nekota"} url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}></ContactoR>
            </div>
            <div className={styles.contacto}>
              <ContactoR mail={"Aqua"} url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}></ContactoR>
            </div>
            <div className={styles.contacto}>
              <ContactoR mail={"Ayame"} url={"https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"}></ContactoR>
            </div>
            
          </div>
        </>
    )
}

/*{ contactos.map(contacto => {
  <ContactoR mail={contacto.mail} url={contacto.imagen}></ContactoR>
})

}*/