"use client"

/*
Usuario profes
mail: profes@mail.com
contra: profes
*/

import Button from "@/components/Button"
import Form from "@/components/Form"
import styles from "@/app/login/login.module.css"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Login(){
    var y = 0
    var x = 0
    const router = useRouter()
    const [usuarios, setUsuarios] = useState([])
    const [valorM, setValorM] = useState("")
    const [valorC, setValorC] = useState("")

    function moverse(){
        router.replace("../register")
    }

    function corrobao1(event){
        setValorM(event.target.value)
    }

    function corrobao2(event){
        setValorC(event.target.value)
    }
    
    function loguear(datos){
        if (valorM != "" && valorC != ""){
            fetch("http://localhost:4000/login",
            {
                method:"POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(result =>{
                console.log(result.log[0].Id_usuario)
                if (result.validar == true){
                    localStorage.setItem("loguedUser", result.log[0].Id_usuario)
                    router.push("../listaC")
                } else {
                    return alert("La Cagaste")
                }}
            )
        }
    }

    function loguea() {
    if(valorM == undefined || valorC == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        mail: valorM,
        password: valorC
    }
    loguear(datos)}

    useEffect(()=>{
        console.log(usuarios)
    }, [usuarios])

    return(<>
    <Form
        value1={valorM}
        value2={valorC}
        onChange1={corrobao1}
        onChange2={corrobao2}
        texth1={"Iniciar Sesión"}
        textb={"Inciar Sesión"}
        onClick={loguea}
        type1={"text"}
        type2={"password"}
    ></Form>
    <br></br>
    <br></br>
    <Button text={"No tengo cuenta"} onClick={moverse} className={styles.nocuenta}></Button>
    
    {
        /*props.login == true ? 
        <Button text={"No tengo cuenta"} onClick={moverse} className={styles.nocuenta}></Button>
        :
        <h2></h2>*/
    }
    </>)
}