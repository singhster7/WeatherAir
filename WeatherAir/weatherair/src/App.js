import { useState } from "react";

const API_token = 'cc2ce1b6590865bab4ed7ede2515b5d87a00677ac342668e13ad8f37d092f6759ab7e6927d1712ec7380119f61413325';

function App() {
  // const [clicked, setclicked] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");
  const [AirportName, setAirportName] = useState("");
  const [AirportKeyword, setAirportKeyword] = useState("");
  const [Airportlink, setAirportlink] = useState("");

   const searchAirport = async (icao_code) => {
    const response = await fetch(`https://airportdb.io/api/v1/airport/${icao_code}?apiToken=${API_token}`);
    const data = await response.json();
    console.log(data.name);

    setAirportName(data.name);
    setAirportlink(data.home_link);
    setAirportKeyword(data.keywords);
   } 


  return (
    <div style={{overflow:"hidden"}} className="App">
<h1 style={{position:'relative', left:'35%'}}>Know About Airports - React Sample Project</h1>
<p style={{position:'relative', left:'35%'}}> VIDP, KJFK - ICAO Code of a two famous Airports</p>

      <input style={{position:'relative', left:'35%'}} placeholder="Enter ICAO Code" type="text"
      value={SearchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}></input>
      <input style={{position:'relative', left:'35%'}} type="submit" onClick={() => searchAirport(SearchTerm)}></input>

     {AirportName.length > 0 ? (<>
  <h1 style={{position:'relative', left:'35%'}}>{AirportName}</h1>
  <h2 style={{position:'relative', left:'35%'}}>{AirportKeyword}</h2>
  <a style={{position:'relative', left:'35%'}}href={Airportlink}>Click to know about it</a>
  </>):(<>

  </>)}

      <footer style={{position:'fixed',bottom:'5px',left:'27%',backgroundColor:'Black',color:'white'}}>This Program Aims to Utilise and Demonstrate the learning of Fetch an API endpoint data via React and Use State</footer>
    </div>
  );
}

export default App;
