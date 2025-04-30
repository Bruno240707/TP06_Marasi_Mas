import { useState } from "react"

const ValidarFormNombre = ({placeHolder, name}) => {
    const [nombreError, setNombreError] = useState("")

    const handleChangeNombre = (e) => {
      if(e.target.value.length < 3) {
        setNombreError("El nombre debe tener almenos 3 caracteres")
      }
      else {
        setNombreError("")
      }
    }


    return (
        <>
            <input type="text" className="u-full-width" name={name} placeholder={placeHolder} onChange={handleChangeNombre}/>
            <span>{nombreError}</span>
        </>
    )
}

export default ValidarFormNombre