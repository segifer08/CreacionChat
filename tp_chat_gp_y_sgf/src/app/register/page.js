"use client"


import Button from "@/components/Button"
import Form from "@/components/Form"
import { useRouter } from "next/navigation"


export default function Register(){
    const router = useRouter()

    function registrar(){
        
    }

    function moverse(){
        router.replace("../login")
    }

    return(<>
    <Form
        texth1={"Registrarse"}
        textb={"Registrarse"}
        onClick={registrar}
        type1={"text"}
        type2={"password"}
    ></Form>
    <br></br>
    <br></br>
    <Button text={"Ya tengo cuenta"} onClick={moverse}></Button>
    </>)
}