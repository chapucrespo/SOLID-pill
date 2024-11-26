import React from 'react'

//recibo la response desde la API, pero tambien estoy analizando desde donde llamo el componente 
//si hay un descuento, cuando es algo que puedo deducir
//obligo al usuario a repetirme algo que ya me dijo
const Discount = ({response, hasDiscount}) => {
    const {discount} = response; 

    return (
      <div>
        {discount ? <p>Tenes un descuento</p> : <p>No tenes un descuento</p>}
      </div>
    )
}

export default Discount