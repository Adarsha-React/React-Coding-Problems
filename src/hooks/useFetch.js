import { useEffect, useState } from "react";

const useFetch = (inURL, flag) => {
  const [inputData, setInputData] = useState([]);

  console.log("Called - useFetch");
  const fetchData = async (inURL) => {
    try {
      const data = await fetch(inURL);
      const json = await data.json();
      setInputData(json);
      console.log(json?.bpi?.USD?.rate);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(inURL);
  }, [flag]);

  return inputData;
};

export default useFetch;
