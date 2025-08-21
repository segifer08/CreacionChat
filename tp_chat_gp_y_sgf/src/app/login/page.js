"use client"

import Form from "@/components/Form"


export default function Login(){
    
    function loguear(){
        
    }

    return(<>
    <Form
        text={"Inciar Sesión"}
        onClick={loguear}
        type1={"text"}
        type2={"password"}
    ></Form>
    </>)
}