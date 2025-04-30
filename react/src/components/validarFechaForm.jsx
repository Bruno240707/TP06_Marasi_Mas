import { useState } from "react"

const ValidarFormFecha = ({placeHolder, name}) => {
    const [fechaError, setFechaError] = useState("")
    const fechaActual = new Date()
    const timeStampActual = fechaActual.getTime()

    const handleChangeFecha = (e) => {
        const timeStampIngresado = new Date(e.target.value).getTime()

        if(timeStampActual > timeStampIngresado) {
            setFechaError("La fecha no puede ser menor a la actual")
        } else if (timeStampIngresado === null || timeStampIngresado === undefined || isNaN(timeStampIngresado)){
            setFechaError("No puede ser vacio")
        }
        else {
            setFechaError("")
        }
    }

    return (
        <>
            <input type="date" className="u-full-width" name={name} placeholder={placeHolder} onChange={handleChangeFecha}/>
            <span>{fechaError}</span>
        </>
    )
}

export default ValidarFormFecha