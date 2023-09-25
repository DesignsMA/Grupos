import "./boton.css"
const Boton = (props) => {
    return <div className="boton">
        <button>{props.texto}</button>
        </div>
}
export default Boton