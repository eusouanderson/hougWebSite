import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (endpoint: string): Promise<any> => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
