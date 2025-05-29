import { useEffect, useState } from 'react';
import Formulario from './components/formulario/index.jsx'
import Listado from './components/listado/index.jsx'
import './App.css';

function App() {
  const [citas, setCitas] = useState([])
  const [idCita, setId] = useState(1)

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }

    const idCitasGuardadas = localStorage.getItem('idCitas');
    if (idCitasGuardadas) {
      setId(JSON.parse(idCitasGuardadas))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  useEffect(() => {
    localStorage.setItem('idCitas', JSON.stringify(idCita));
  }, [idCita]);

  return (
    <>
      <div className="contenedorGeneral">
        <Formulario citas={citas} setCitas={setCitas} idCita={idCita} setId={setId}/>
        <div className="contenedorCitas">
        <Listado citas={citas} setCitas={setCitas}/>
        </div>
      </div>
    </>
  )
}

export default App
