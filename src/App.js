import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [flag, setFlag] = useState(false);
  const inURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

  const data = useFetch(inURL, flag);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Called Interval");
      setFlag(!flag);
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, [flag]);

  console.log(data?.bpi?.USD?.rate);
  return (
    <div>
      <h1>{data?.bpi?.USD?.description}</h1>
      <h1>{data?.bpi?.USD?.rate}</h1>
    </div>
  );
}

export default App;
