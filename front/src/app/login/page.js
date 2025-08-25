"use client"

import Button from "@/components/Button"
import Form from "@/components/Form"
import { useRouter } from "next/navigation"


export default function Login(){
    const router = useRouter()

    function moverse(){
        router.replace("../register")
    }
    
    function loguear(){
        
    }

    return(<>
    <Form
        texth1={"Iniciar Sesión"}
        textb={"Inciar Sesión"}
        onClick={loguear}
        type1={"text"}
        type2={"password"}
    ></Form>
    <br></br>
    <br></br>
    <Button text={"No tengo cuenta"} onClick={moverse}></Button>
    </>)
}