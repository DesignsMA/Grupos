import { useState } from "react"
import "./campo.css"

const Campo = (props) => {
    const placeholderMod = `${props.placeholder}...`
    
    const { tipo = "Text"} = props
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }


        <label>{props.titulo}</label>
    return <div className={`campo campo-${tipo}`}>
        <input
        type={tipo} 
        placeholder={placeholderMod} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        ></input>
    </div>
}

export default Campo