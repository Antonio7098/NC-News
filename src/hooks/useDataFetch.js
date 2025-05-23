import { useState, useEffect } from 'react';

export default function useDataFetch(fetchFn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchFn();
        if (isMounted) {
          setData(response);
        }
      } catch (err) {
        if (isMounted) {
          console.log(err)
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]); // Dependency: re-run this effect only when fetchFn changes

  return { data, loading, error };
}