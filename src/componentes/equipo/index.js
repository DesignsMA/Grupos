import './equipo.css'
import hexToRgba from 'hex-to-rgba';
import Integrante from '../integrante'

const Equipo = (props) => {
    //Destructuración
    //Para ahorrar repeticion de codigo

    const { colorPrimario, id, titulo } = props.datos
    const { colaboradores, eliminarIntegrante, actualizarColor, favorito } = props
    const secundario = { backgroundColor: hexToRgba(colorPrimario, 0.5)}
    const primario = { borderColor: colorPrimario }
    
    return <>
    {colaboradores.length > 0 && 
    <section className="equipo" style={secundario}>
        <input
        className='input-color'
        type='color'
        value={colorPrimario}
        onChange={(evento) => {
            actualizarColor(evento.target.value, id)
        }}
        />
        <h3 style={ primario }>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, i) => <Integrante 
                    datos={colaborador}
                    key={i} 
                    colorPrimario={colorPrimario}
                    favorito={favorito}
                    eliminarIntegrante={eliminarIntegrante}
                 /> )
            }
        </div>
    </section>
            }
    </>
}

export default Equipo