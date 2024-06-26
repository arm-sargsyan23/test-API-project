import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useRequest = (url) => {
  const [result, setResult] = useState([]);

  const request = useCallback(async () => {
    try {
      const response = await axios({
        url,
        method: "GET",
      });
      if (response.data !== undefined) {
        setResult(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    request();
  }, [request]);

  return { data: result };
};

export default useRequest;
