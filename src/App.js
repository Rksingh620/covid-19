import React, { useEffect, useState } from 'react';
import './App.css';
import CovidData from './CovidData';
const App=()=> {

const url = 'https://coronavirus-19-api.herokuapp.com/countries';

 const [country,setCountry] = useState([]);
  useEffect(()=>{//runs whenever our page renders any elements
    getData();
  },[]);
  //empty array to run it only once or,
  // assign elements in arry
  //to run it only when that element changes
const getData=async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
    console.log(data);
    
  }
  return (
    <div className="App">
     <h1 className="h1">Hello World</h1>
     <div className="search">
    <form className="searchForm">
        <input className="searchBar" type="text" name="countryName"/>
        <button className="searchBtn" type="submit">Search</button>
      </form>
      </div>
      <div id="container">
      {country.map(e=>(
        <CovidData country={e.country}
        cases={e.cases}
        todayCases={e.todayCases}
        deaths = {e.deaths}
        todayDeaths = {e.todayDeaths}
        recovered = {e.recovered}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
