"use client"


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
    }

    function corrobao2(event){
        setValorC(event.target.value)
    }

    function registrar(){
        if (valorM != "" && valorC != ""){
            /*fetch("http://localhost:4000/registro")
            .then(response => response.json())
            .then(result =>{
                //if 
                console.log(result)
                localStorage.setItem("loguedUser", result.log[0])
                router.replace("../listaC")
            })
            .then router.replace("../listaC")*/
           return console.log("Verificacion epica")
        }
        return alert("Faltan Datos")
    }

    return(<>
    <Form
        value1={valorM}
        value2={valorC}
        onChange1={corrobao1}
        onChange2={corrobao2}
        texth1={"Registrarse"}
        textb={"Crear usuario"}
        onClick={registrar}
        type1={"text"}
        type2={"password"}
    ></Form>
    <br></br>
    <br></br>
    <Button text={"Ya tengo cuenta"} onClick={moverse}></Button>
    </>)
}