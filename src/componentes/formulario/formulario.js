import { useState  } from "react"
import { v4 as uuid } from 'uuid';
import "./formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"
const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const { registrarIntegrante, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            id:uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
            fav: false,
        }
        registrarIntegrante(datosAEnviar)
    }

    
    const manejarEquipo = (evento) => {
        evento.preventDefault()
        let datosEquipo = {
            id: uuid(),
            titulo: titulo,
            colorPrimario: color,
        }
        crearEquipo(datosEquipo)
    }


    return   <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Coloca los datos del colaborador</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresa el nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}/>

            <Campo
            titulo="Cargo" 
            placeholder="Ingresa el cargo" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            

            <Campo
            titulo="Foto" 
            placeholder="Ingresa un enlace valido de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />

            <ListaOpciones
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}            
            ></ListaOpciones>

            <Boton 
            texto="Crear Integrante"/>
        </form>

        <form onSubmit={manejarEquipo}>
            <h2>Coloca los datos del nuevo equipo</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresa el titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}/>

            <Campo
            tipo="color"
            titulo="Color" 
            placeholder="Ingresa el color en hexadecimal" 
            required
            valor={color} 
            actualizarValor={actualizarColor}
            />

            <Boton texto="Registrar Equipo"></Boton>
        </form>

    </section>
}

export default Formulario