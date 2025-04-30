import { useState } from "react"
import "./cita.css"

function Cita({cita, citas, setCitas}) 
{

  const [confirmacion, setConfirmacion] = useState(false)

  const borrarCita = () => {

    if(confirmacion == true){
      const citasAborrar = citas.filter(c => c.id != cita.id)
      setCitas(citasAborrar)
      setConfirmacion(false)
    }
  }


    return (
        <div className="cita">
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.dueno}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Síntomas: <span>{cita.sintomas}</span></p>
          {confirmacion ? (
            <div>
              <p>¿Estás seguro de que deseas borrar esta cita?</p>
              <button onClick={borrarCita}>Sí, borrar</button>
              <button onClick={() => setConfirmacion(false)}>Cancelar</button>
            </div>
          ) : (
            <button onClick={() => setConfirmacion(true)}>Borrar cita</button>
          )}
        </div>
      );
}

export default Cita

