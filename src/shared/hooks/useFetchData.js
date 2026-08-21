import { useCallback, useState, useEffect } from "react";

export function useFetchData(fetcher) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const refetch = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetcher()
            setData(result)

        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
        
    }, [fetcher]);

    useEffect(() => {
        if(!fetcher) return

        refetch()
    }, [fetcher, refetch]);

    if(!fetcher) return { data: null, loading: false, error: null}
    
    return { data, loading, error, refetch};
}