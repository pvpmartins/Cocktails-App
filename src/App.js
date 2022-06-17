import './App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  const [dataApi, setDataApi] = useState()


  const fetchApi = async () => {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const json = await res.json()
      setDataApi(json)
    
  }

  useEffect(() => {
    fetchApi()
  },[])

  return (
    <div className="App">
      
        <Link to="/cocktails" state={dataApi}><h1>Revelar drink!</h1></Link>
      
      
    </div>
  );
}

export default App;
