import { useEffect, useState } from "react";
import axios from "axios";
export const useAxios = ({ url, config }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, config);
                setData(response.data.Data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, config]);

    return { data, error, loading };
};
