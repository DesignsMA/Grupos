import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import Org from './componentes/org/index.js';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {

 

  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarIntegrantes] = useState([{
    id:uuid(),
    equipo:"Diseño",
    nombre:"DesignMA",
    foto:"",
    puesto:"Admin",
    fav: true,
  }])

  const[equipos, actualizarEquipos] = useState( 
    [ 
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },

    {
      id:uuid(),
      titulo:"Diseño",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },

    {
      id:uuid(),
      titulo:"Datos",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },

    {
      id:uuid(),
      titulo:"Diagramas y UML",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },

    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    }
    
])
  
//Ternario --> condicion ? verdadero sentencias : falso sentencias
// Condicion && verdadero sentencias
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar Colaborador
  const registrarIntegrante = (integrante) => {
    console.log("Nuevo integrante", integrante)
    //spread operator
    actualizarIntegrantes([...colaboradores, integrante])

  }

  //Eliminar Colaborador
  const eliminarIntegrante = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarIntegrantes(nuevosColaboradores)
  }

  //Actualizar Color Equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
        equipo.colorSecundario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, nuevoEquipo])
  }


  const favorito = (id) => {
    console.log(id)
    const integrantesActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){ 
        colaborador.fav = !colaborador.fav}
    return colaborador
    })
    actualizarIntegrantes(integrantesActualizados)
  }



 


  return (
    
    <div className="App">

      <Header></Header>
      { mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=> equipo.titulo)}
      registrarIntegrante={registrarIntegrante}
      crearEquipo={crearEquipo}
       />
       }
      <Org cambiarMostrar={cambiarMostrar}/>

      { equipos.map((equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo}
      eliminarIntegrante={eliminarIntegrante}
      actualizarColor={actualizarColor}
      favorito={favorito}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      /> )}
      <Footer/>

    </div>
  );
}



export default App;
