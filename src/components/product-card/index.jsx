import React from 'react'

const ProductCard = (id, name, price) => {
    return (
        <div key={id}>
        <h2>{name}</h2>
        <h3>{price}</h3>
        </div>
    )
}

export default ProductCard