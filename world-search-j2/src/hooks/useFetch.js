import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setLoading(false);
            setData(null);
            return;
        }

        const controller = new AbortController();
        setLoading(true);
        setError(null);
        setData(null);

        fetch(url, { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch data ${res.status}`);
                return res.json();
            })
            .then(json => setData(json))
            .catch(err => {
                if (err.name !== 'AbortError') setError(err)
            })
            .finally(() => setLoading(false));

        return () => controller.abort()
    }, [url]);

    return { data, loading, error }
}