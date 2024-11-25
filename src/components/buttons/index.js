import React from 'react'

//!Ej. open-close. Puedo extenderlo con otros estilos/distintos comportamientos, no toco "la base" del componente
export const Button = ({label, onClick, style}) => {
    return (
        <button style={style} onClick={onClick} className='simple-button'>
            {label}
        </button>
    )
}

export const ErrorButton = () => {
    return (
        <button type="submit" onClick={() => {throw new Error("te pasaste mi loco")}} className='simple-button'>
            ERROR
        </button>
    )
}
//? Podria reemplazar cualquier instancia de Button con ErrorButton? No, porque esta hardcodeado 

export const IconButton = ({label, onClick, icon, style}) => {
    return (
        <button onClick={onClick} style={style} className='simple-button'>
            <img src={icon} alt={label} className='icon'/>
        </button>
    )
}
//? Podria reemplazar cualquier instancia de button con IconButton? Si, pasando las props correspondientes. soLid

//! Otra posibilidad. Con este puedo hacer todo sin tener que definir otro button para el caso de IconButton
//! Toma cosas de ambos principios, porque esta abierto a ampliar pero cerrado a modificaciones 
//! Y puede reemplazar cualquier instancia de button 
export const GenericButton = ({style, onClick, children}) => {
    return (
        <button onClick={onClick} style={style} className='simple-button'>
            {children}
        </button>
    )
}