import React from 'react';
import './CovidData.css';
const CovidData = ({country,cases,todayCases,deaths,todayDeaths,recovered})=>{
    return (
            <div className="card">
                <h1>{country}</h1>
                <p>Cases:{cases}</p>
                <p>Today Cases:{todayCases}</p>
                <p>Deaths:{deaths}</p>
                <p>Today Deaths:{todayDeaths}</p>
                <p>Today Recovered:{recovered}</p>
            </div>
    );
}
export default CovidData;