"use client"

import ContactoG from "@/components/ContactoG"
import { useState } from "react"

export default function perfil(){
    const [linkedin, setLinkedin] = useState("")
    const [malquinequi, setMalquinequi] = useState("")

    /*ACA VA UNH FETCH*/
    
    return(
        <>
            <ContactoG
                url={linkedin}
                mail={malquinequi}
            ></ContactoG>
        </>
    )
}