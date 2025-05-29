import './Formulario.css';
import ValidarFormNombre from '../validarNombreForm';
import ValidarFormFecha from '../validarFechaForm';
import { useState } from 'react';

function Formulario({citas, setCitas}) {
  const [id, setId] = useState(0)

  const [confirmacionCita, setConfirmacionCita] = useState(false)

  

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
    if(confirmacionCita == true){
      setCitas([...citas, nuevaCita])
      setId(id + 1)
      setConfirmacionCita(false)
    }
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
        <input type="time" className="u-full-width" name='hora'/>

        <label>Síntomas</label>
        <textarea className="u-full-width" name='sintomas'></textarea>
        {confirmacionCita ? (
            <div>
              <p>¿Estás seguro de que deseas agregar una cita?</p>
              <button>Sí, agregar</button>
              <button onClick={() => setConfirmacionCita(false)}>Cancelar</button>
            </div>
          ) : (
            <button onClick={() => setConfirmacionCita(true)}>Agregar cita</button>
          )}
      </form>
      </div>
    </>
  );
}

export default Formulario;