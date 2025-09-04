"use client"

import ContactoG from "@/components/ContactoG"
import { useEffect, useState } from "react"

export default function perfil(){
    let loguedUser = localStorage.getItem("loguedUser")
    const [logued, setLogued] = useState(loguedUser)
    const [linkedin, setLinkedin] = useState(null)
    const [malquinequi, setMalquinequi] = useState("")
    const [cambiazo, setCambiazo] = useState("")

    useEffect(()=>{
        const loguedUser = localStorage.getItem("loguedUser")
        setLogued(loguedUser)
        console.log(logued);
        perfilado()
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
                console.log(result.usuario)
                setLinkedin(result.usuario[0].imagen)
                if(linkedin == null){
                    setLinkedin("https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg")
                }
                setMalquinequi(result.usuario[0].Mail)
            } else {
                return alert("La Cagaste")
            }
        }
        )
  }

    function perfilado() {
        if(logued == undefined){
            return ui.showModal("Error", "Faltan datos")
        }
        console.log(logued)
        let datos = {
            id: logued
        } 
        perfil(datos)
    }

    // fetch de cambio imagen

    function imagen(datos){
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
        console.log(logued)
        let datos = {
            imagen: cambiazo,
            id: logued
        } 
        imagen(datos)
    }

  function moverse(){
    router.push("../chat")
  }

    return(
        <>
            <ContactoG
                url={linkedin}
                mail={malquinequi}
            ></ContactoG>
        </>
    )
}