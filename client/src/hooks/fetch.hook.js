import axios from "axios";
require("dotenv").config();

import { useState, useEffect } from "react";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export default function useFetch(query) {
  const [getData, setGateData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });
  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setGateData((prev) => ({ ...prev, isLoading: true }));
        const { data, status } = await axios.get(`/api/${query}`);
        if (status === 201) {
          setGateData((prev) => ({ ...prev, isLoading: false }));
          setGateData((prev) => ({ ...prev, apiData: data, status: status }));
        }
      } catch (error) {
        setGateData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    };
    fetchData();
  }, [query]);
  return [setGateData, getData];
}
