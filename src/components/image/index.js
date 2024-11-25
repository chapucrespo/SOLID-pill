import React from 'react'

const Image = ({icon, altText}) => {
    return (
        <img src={icon} alt={altText} className='icon'/>
    )
}

export default Image