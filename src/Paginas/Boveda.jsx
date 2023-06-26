import Menu from "../Componentes/Menu.jsx"
import Footer from '../Componentes/Footer.jsx'
import { collection, addDoc } from "firebase/firestore";
import { dataBase,  } from "../config/dataBase.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Boveda = () => {

  const [nombre,setNombre]=useState("");
  const [urlImagen,setUrlImagen]=useState("")
  const [contrasena,setContrasena]=useState("");
  const [usuario,setUsuario]=useState("");
  /*imagen del sitio*/
  
  const returnListado =useNavigate();

  const agregarBoveda= async()=>{


    const servicioCollection = collection(dataBase,"Bovedas");
    const servicio = {
      nombre,
      urlImagen,
      contrasena,
      usuario
    };

    await addDoc(servicioCollection,servicio);
    returnListado("/Bovedas");
     
  };







  return (
    <div>
      <Menu/>
     <h1>Registrar Boveda</h1>
     <section>
      <form className="formBovedas">
        <input
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre"}
          type={"text"}
        />
        <input
          onChange={(e) => setUrlImagen(e.target.value)}
          placeholder={"Url de Imagen"}
          type={"text"}
        />
        <input
          onChange={(e) => setContrasena(e.target.value)}
          placeholder={"Contraseña"}
          type={"text"}
        />
        <input
          onChange={(e) => setUsuario(e.target.value)}
          placeholder={"Usuario"}
          type={"text"}
        />
         <input
          onClick={agregarBoveda}
          type={"button"}
          value={"Agregar Bodeva"}
        />
        
      </form>
     </section>
     <Footer/>
      </div>
  )
}

export default Boveda