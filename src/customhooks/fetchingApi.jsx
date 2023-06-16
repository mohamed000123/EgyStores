import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setdata] = useState([]);
  async function fetchData() {
    let response = await fetch("https://fakestoreapi.com/products");
    response = await response.json();
    setdata(response);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useFetch;
