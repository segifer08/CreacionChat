"use client"

import { useState } from "react"

export default function Input(props) {
    
    return (
        <>
            <input type={props.type} onChange={props.onChange} value={props.value} ></input>
        </>
    )

}