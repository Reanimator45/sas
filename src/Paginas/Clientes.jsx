import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx"

import Menu from "../Componentes/Menu.jsx"
import Footer from '../Componentes/Footer.jsx'
import ListarClientes from "../Layouts/ServiciosClientes/ListarClientes.jsx"
const Clientes = () => {
  
  return (
    <div>
      <Menu/>

      <CrearClientes/>
      <ListarClientes/>
      <Footer/>
      </div>
  )
}

export default Clientes