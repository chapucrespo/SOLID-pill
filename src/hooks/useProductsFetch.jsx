import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchProducts = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const response = await axios.get('http://api.com/products');
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsFetching(false);
            }

            setIsFetching(false);
        }

        fetchProductsData();
    }, []);

    return { data, error, isFetching };
};
