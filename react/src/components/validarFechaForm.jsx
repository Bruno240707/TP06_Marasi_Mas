import { useState } from "react"

const ValidarFormFecha = ({placeHolder, name}) => {
    const [fechaError, setFechaError] = useState("")
    const timeStampActual = Date.now()

    const handleChangeFecha = (e) => {
        const timeStampIngresado = new Date(e.target.value).getTime()
        
        if(timeStampActual > timeStampIngresado) {
            setFechaError("La fecha no puede ser menor a la actual")
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