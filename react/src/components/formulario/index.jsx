import './Formulario.css';

function Formulario() {
  return (
    <>
    <div className='contenedorFormulario'>
      <h2>Crear mi Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input type="text" className="u-full-width" placeholder="Nombre Mascota" />

        <label>Nombre Dueño</label>
        <input type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" />

        <label>Fecha</label>
        <input type="date" className="u-full-width" />

        <label>Hora</label>
        <input type="time" className="u-full-width" />

        <label>Síntomas</label>
        <textarea className="u-full-width"></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
      </div>
    </>
  );
}

export default Formulario;