import "./Org.css"

const Org = (props) => {
    //Estados - Hooks
    //useState
    //useState()

    //const [mostrar,actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    console.log("args", !mostrar)
    //    props.cambiarMostrar
    //}
    
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar}/>
    
    </section>
}

export default Org