import React, { useContext, useEffect, useState } from 'react'
import JourneyContext from '../JourneyContext';
import { Spinner } from 'react-bootstrap';
import BusResult from './BusResult';

export default function SearchResult() {
    const [buses, setBuses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {fromCity, toCity} = useContext(JourneyContext);

    async function fetchBuses() {
        setIsLoading(true);
        const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${fromCity}&destination=${toCity}`)
        const allBuses = await response.json();
        setIsLoading(false);
        setBuses(allBuses);
    }

    useEffect(() => {
        fetchBuses();
    }, [fromCity, toCity])

    function setResult(criteria){
        if(criteria==="Price"){
            const busesCopy = [...buses];
            const sortedBuses = busesCopy.sort((a, b)=>{
                if(Number(a.ticketPrice) < Number(b.ticketPrice)){
                    return -1;
                }
                return 1;
            })
            setBuses(sortedBuses);
        }
    }

    if (isLoading) {
        return <Spinner animation="grow"/>;
    }
    return (
        <div className='bg-danger p-1 d-flex flex-column' style={{marginTop:'8vh'}}>
            <div className="bg-white p-2 d-flex align-self-center justify-content-between w-75">
                <h4 className='col-md-2'>SORT BY:</h4>
                {["Departure", "Arrival", "Price"].map((criteria)=>{
                    return <button className='btn btn-danger rounded-0 col-md-1' onClick={()=>{
                        setResult(criteria);
                    }}>{criteria}</button>
                })}
            </div>
            {buses.map((bus)=>{
                return <BusResult bus={bus}/>
            })}
        </div>
    )
}
