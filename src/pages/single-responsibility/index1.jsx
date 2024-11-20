/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //llamo servicio que necesito para poblar la pagina 
        //si cambia la URL que debo llamar, la funcion ya tiene 1 motivo para cambiar
        //ademas de que no puedo reutilizar esta funcion si la necesito en otro lado
        const getProducts = async () => {
            try {
                const response = await axios.get('https://api.com/products');
                setProducts(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsFetching(false);
            }

            setIsFetching(false);
        }

        getProducts();
    }, [])


    return (
        <div>
            {/* produzco el componente a renderizar aca mismo, si quiero cambiar algo, 
            ya es otro motivo para cambiar */}
            {isFetching && <p>Loading...</p>}
            {error && <p>Something broke</p>}
            {/* idem comentario anterior, estamos haciendo la UI aca mismo
            estos problemas se suelen solucionar solos cuando usamos styled-components*/}
            {products && 
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <h3>{product.price}</h3>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Page