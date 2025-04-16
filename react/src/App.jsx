import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
const Cita = ({citas}) => {
  return (
    <>
      {citas.map((cita, numeroCita) => (
      <div id={numeroCita} className="cita">
        <p>Mascota: {cita.mascota}</p>
        <p> Dueño: {cita.dueno}</p>
        <p>Fecha: {cita.fecha}</p>
        <p>Hora: {cita.hora}</p>
        <p>Síntomas: {cita.sintomas}</p>
      </div>
      ))}
    </>  
  )
}

function App() {
  const [citas, setCitas] = useState([
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
      <h1> ADMINISTRADOR DE PACIENTES </h1>
      <div class="contenedorGeneral">
        <div class="contenedorCrearCita">
          <h1> CREAR MI CITA</h1>
          <form>
            <label>Nombre Mascota</label>
            <input type='text' name='mascota' placeholder='Nombre Mascota' class="inputForm"></input>
            <label>Nombre Dueño</label>
            <input type='text' name='dueno' placeholder='Nombre Dueño' class="inputForm"></input>
            <label>Fecha</label>
            <input type='date' name='fecha' placeholder='Fecha' class="inputForm"></input>
            <label>Hora</label>
            <input type='time' name='hora' placeholder='Hora' class="inputForm"></input>
            <label>Sintomas</label>
            <textarea name='sintomas' class="inputForm"></textarea>
            <button type='submit' className='botonForm'>Agregar Cita</button>
          </form>
        </div>
        
        <div class="contenedorCitas">
          <h1>ADMINISTRAR TUS CITAS</h1>
          <Cita citas={citas}></ Cita>
        </div>
      </div>
    </>
  )
}

export default App
