import Menu from "../Componentes/Menu.jsx";
import Footer from '../Componentes/Footer.jsx';
import { collection,addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../config/dataBase.jsx";


const Productos = () => {
  const [nombre,setNombre]=useState("");
  const [cantidad,setCantidad]=useState("");
  const [valor,setValor]=useState("");
  const [descripcion,setDescripcion]=useState("");
  /*Agregar imagen */
  const [categoria,setCategoria]=useState("");

const returnListado=useNavigate();
const agregarProducto=async()=>{


  const servicioCollection=collection(dataBase,"Productos");
  const servicio={
    nombre,
    cantidad,
    valor,
    descripcion,
    categoria

  };
  await addDoc(servicioCollection,servicio);
  returnListado("/Productos")/*cambiar redireccion*/ 
}


  return (
    <div>
      <Menu/>
      <h1>Registrar Productos</h1>
      <section>
        <form className="formProductos">
          <input
          onChange={(e)=>setNombre(e.target.value)}
          placeholder={"Nombre"}
          type={"text"}
          />
          <input
          onChange={(e)=>setCantidad(e.target.value)}
          placeholder={"Cantidad"}
          type={"text"}
          />
          <input
          onChange={(e)=>setValor(e.target.value)}
          placeholder={"Valor"}
          type={"text"}
          />
          <input
          onChange={(e)=>setDescripcion(e.target.value)}
          placeholder={"Descripcion"}
          type={"text"}
          />
          <input
          onChange={(e)=>setCategoria(e.target.value)}
          placeholder={"Categoria"}
          type={"text"}
          />
          <input
          onClick={agregarProducto}
          type={"button"}
          value={"Agregar Producto"}
          />
        </form>
      </section>
      <Footer/>
      </div>
  )
}

export default Productos