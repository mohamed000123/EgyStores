import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  async function fetchData() {
    let response = await fetch(url);
    response = await response.json();
    setdata(response);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useFetch;
