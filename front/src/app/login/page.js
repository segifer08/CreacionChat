"use client"

/*import styles from "@/app/login/login.module.css"*/
import Button from "@/components/Button"
import Form from "@/components/Form"
import { useRouter } from "next/navigation"


export default function Login(){
    var y = 0
    var x = 0
    const router = useRouter()

    function moverse(){
        router.replace("../register")
    }

    function corrobao1(){
        y+=1
    }

    function corrobao2(){
        x+=1
    }
    
    function loguear(){
        if (y != 0 && x != 0){
            fetch("http://localhost:4000/login")
        }
        alert
    }

    return(<>
    <Form
        onChange1={corrobao1}
        onChange2={corrobao2}
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