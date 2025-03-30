import { useState, useEffect, use } from "react";

interface UseFetchProps {
  data: any[] | [];
  error: string;
  loading: boolean;
}

export const useFetch = (url: string): UseFetchProps => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        console.log("RESPONSE: ", response);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, error, loading };
};
