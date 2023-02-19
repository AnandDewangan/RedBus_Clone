import React from "react"
import { useNavigate } from "react-router-dom";

export default function BusResult({ bus }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-white p-1 m-3 d-flex justify-content-between align-items-center' 
            style={{cursor: 'pointer'}}
            onClick={()=>{
                navigate("/book-seats");
            }}
            >
                <div className="heading col-md-3">
                <h3>{bus.busName}</h3>
                </div>
                <div className="departure col-md-4">
                    <p>DEPARTURE</p>
                    <h4>{bus.departureTime}</h4>
                </div>
                <div className="arrival col-md-4">
                    <p>ARRIVAL</p>
                    <h4>{bus.arrivalTime}</h4>
                </div>
                <div className="prices col-md-1">
                    <h3>{bus.ticketPrice}/-</h3>
                </div>
            </div>
        </div>
    )
}
