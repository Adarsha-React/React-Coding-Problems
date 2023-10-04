import { useState } from "react";
import { countries } from "./mockdata/constants";

function App() {
  const [country, setCountry] = useState("");
  console.log(countries);
  console.log(country);
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countries.map((item, index) => {
          return (
            <option value={index} key={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      <select>
        {countries[country]?.cities?.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default App;
