import Cita from '../cita/index.jsx'
import './listado.css'

function listado({citas}) {
    return (
        <>
          <h2>Administra tus citas</h2>
          <div className="listado-citas">
            {citas.map((cita) => (
              <Cita cita={cita} />
            ))}
          </div>
        </>
      );
}

export default listado
