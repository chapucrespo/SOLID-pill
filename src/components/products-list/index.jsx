import React from 'react'
import ProductCard from '../product-card'

const Products = (products) => {
    return (
        <>
            {(products || []).map((product) => (
                <ProductCard key={product.id} name={product.name} price={product.price} />
            ))}
        </>
    )
}

export default Products