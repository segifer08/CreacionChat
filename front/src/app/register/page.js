"use client"

/* Usuario profes
mail: profes@mail.com
contra: profes */
import Button from "@/components/Button"
import Form from "@/components/Form"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"



export default function Register(){
    const router = useRouter()
    const [valorM, setValorM] = useState("")
    const [valorC, setValorC] = useState("")

    function moverse(){
        router.replace("../login")
    }


    function corrobao1(event){
        setValorM(event.target.value)
        console.log(valorM)
    }

    function corrobao2(event){
        setValorC(event.target.value)
        console.log(valorC)
    }

    function registrar(datos){
        if (valorM != "" && valorC != ""){
            fetch("http://localhost:4000/registro",{
                method:"POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                if (result.validar == true){
                    localStorage.setItem("loguedUser", result.log[0].Id_usuario)
                    alert("Funca?")
                    router.replace("../listaC")
                } else {
                    return alert("La Cagaste")
                }
            })
        }
    }

    function registra() {
    console.log(valorM)
    console.log(valorC)
    if(valorM == undefined || valorC == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        mail: valorM,
        password: valorC
    }
    registrar(datos)}

    return(<>
    <Form
        value1={valorM}
        value2={valorC}
        onChange1={corrobao1}
        onChange2={corrobao2}
        texth1={"Registrarse"}
        textb={"Crear usuario"}
        onClick={registra}
        type1={"text"}
        type2={"password"}
    ></Form>
    <br></br>
    <br></br>
    <Button text={"Ya tengo cuenta"} onClick={moverse}></Button>
    </>)
}