import "./integrante.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Integrante = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarIntegrante, favorito }= props

    return <div className="integrante">
                <AiFillCloseCircle  className="eliminar" onClick={() => eliminarIntegrante(id)}/> 
                
                <div className="encabezado" style={{
                    backgroundColor:colorPrimario
                }}>

                { foto.includes("https://") ? <img src={foto} alt={nombre}>
                </img> : <img src={"https://imgur.com/vKfRhDn.png"} alt={nombre}></img>
                }
                    
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>

                    { fav ? <AiFillHeart className="corazon" style={ { 
                        filter: 'drop-shadow(0 0 10px #ff16167d)',
                    }} color="#ff5353" onClick={() => favorito(id)}/> : <AiOutlineHeart onClick={() => favorito(id)} /> }
                    
                </div>
           </div>
}

export default Integrante