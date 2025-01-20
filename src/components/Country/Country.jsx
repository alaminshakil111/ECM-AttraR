import { useState } from 'react';
import './Country.css'

const Country = ({countryProps}) => {
    const {name, flags, population,  area} = countryProps;
    console.log(countryProps)
    const [Isvisited, setVisited] = useState(false);
    function handaleVisited() {
        setVisited(!Isvisited);
    }

    return (

        <div className="country">
            <div className='img'>
                <img src={flags.png} alt="flag of all country" />
            </div>
            <div className='cardContent'>
                <h3> Name: {name.common}  </h3>
                <p> population: {population}  </p>
                <p> area: {area}  </p>
                <button onClick={handaleVisited}> {Isvisited ? 'Visited' : 'click'} </button>
                {
                    Isvisited ? 'I have visited already.' : 'I have not visit yet.'
                }
            </div>
            
            
        </div>
    );
};

export default Country;