import "./cita.css"

function cita({cita, citas, setCitas}) 
{

  const borrarCita = () => {
    const citasNuevas = citas.filter(c => c.id != cita.id)
    setCitas(citasNuevas)
  }

    return (
        <div className="cita">
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.dueno}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Síntomas: <span>{cita.sintomas}</span></p>
          <button className="eliminar" onClick={borrarCita}>Eliminar ×</button>
        </div>
      );
}

export default cita

