import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, SetCountries] = useState([]);
    const [visitCountries, setVisitCountries] = useState([]);

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => SetCountries(data))
    },[]);

    const handleVisitCountries = (visitcountry) => {
        console.log("add your visit countries");
        const newVisitCountries = [...visitCountries, visitcountry];
        setVisitCountries(newVisitCountries);
    }


    return (
        <div>
            <div style={{textAlign:'left'}}>
            <h3> Countries: {countries.length} </h3>
            <div className="visitCountriesList">
                <ul>
                    <h4> Visited Countries:  {visitCountries.length} </h4>
                    {
                        visitCountries.map(visitcountry=> <li key={visitcountry.cca3}> {visitcountry.name.common} </li>)
                    }
                    
                </ul>
            </div>
            </div>
            <div className="CountriesGrid">
            {
                countries.map((country)=> <Country handleVisitCountries={handleVisitCountries} key={country.cca3}  countryProps={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;