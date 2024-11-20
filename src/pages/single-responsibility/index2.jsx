import React from 'react'
import { useFetchProducts } from '../../hooks/useProductsFetch';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Products from '../../components/products-list';


const ProductsPage = () => {
    //si necesito hacer un cambio en la llamada, ya se hace en otro lugar. No necesito modificar aca.
    const {data, error, isFetching} = useFetchProducts();

    return (
        <div>
            {isFetching && <Loader />}
            {error && <Error />}
            {data && <Products data />}
        </div>
    )
}

export default ProductsPage