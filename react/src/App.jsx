import { useState } from 'react';
import Formulario from './components/formulario/index.jsx'
import Listado from './components/listado/index.jsx'
import './App.css';

function App() {
  const [citas, setCitas] = useState([])

  return (
    <>
      <div class="contenedorGeneral">
        <Formulario citas={citas} setCitas={setCitas}/>
        <div class="contenedorCitas">
        <Listado citas={citas} setCitas={setCitas}/>
        </div>
      </div>
    </>
  )
}

export default App
