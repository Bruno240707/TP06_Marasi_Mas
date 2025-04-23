import { useState } from 'react';
import Formulario from './components/formulario/index.jsx'
import Listado from './components/listado/index.jsx'
import './App.css';

function App() {
  const [citas] = useState([
    {
      mascota: 'Pixel',
      dueno: 'Bruno',
      fecha: '2025-04-15',
      hora: '10:00',
      sintomas: 'No come hace dos días'
    },{
      mascota: 'marap',
      dueno: 'Eitan',
      fecha: '2025-04-16',
      sintomas: 'Nose'
    }])

  return (
    <>
      <div class="contenedorGeneral">
        <Formulario/>
        <div class="contenedorCitas">
        <Listado citas={citas} />
        </div>
      </div>
    </>
  )
}

export default App
