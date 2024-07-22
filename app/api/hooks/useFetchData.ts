import { useState, useEffect } from 'react';
import { fetchData } from '../services/apiServices';

const useFetchData = (endpoint: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData(endpoint);
                setData(result);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        loadData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetchData;
