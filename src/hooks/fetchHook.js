import {useEffect, useState} from "preact/hooks";
import axios from "axios";
import parseMealDataJson from '../utils/parseutils.js';

const useFetch = (remoteUrl) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(remoteUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if(url !== "" || url !== null || url !== undefined) {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}

export default useFetch;
