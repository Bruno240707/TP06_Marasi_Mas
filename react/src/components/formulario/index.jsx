import './Formulario.css';
import ValidarFormNombre from '../validarNombreForm';
import ValidarFormFecha from '../validarFechaForm';
import { useState } from 'react';

function Formulario({citas, setCitas}) {
  const [id, setId] = useState(3)

  const agregarCita = (e) => {

    e.preventDefault()

    const nuevaCita = {
      id: id,
      mascota: e.target.mascota.value,
      dueno: e.target.dueno.value,
      fecha: e.target.fecha.value,
      hora: e.target.hora.value,
      sintomas: e.target.sintomas.value
    }

    setCitas([...citas, nuevaCita])
    
    setId(id + 1)
  }

  return (
    <>
    <div className='contenedorFormulario'>
      <h2>Crear mi Cita</h2>
      <form onSubmit={agregarCita}>
        <label>Nombre Mascota</label>
        <ValidarFormNombre placeHolder="Nombre Mascota" name={"mascota"}></ValidarFormNombre>

        <label>Nombre Dueño</label>
        <ValidarFormNombre placeHolder="Nombre Dueño" name={"dueno"}></ValidarFormNombre>

        <label>Fecha</label>
        <ValidarFormFecha placeHolder="Fecha" name={"fecha"}></ValidarFormFecha>

        <label>Hora</label>
        <input type="time" className="u-full-width" name='hora' />

        <label>Síntomas</label>
        <textarea className="u-full-width" name='sintomas'></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
      </div>
    </>
  );
}

export default Formulario;