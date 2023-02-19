import React, { useContext, useState } from 'react';
import { Form, Image, InputGroup } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowLeftRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import JourneyContext from '../JourneyContext';
import Navbar from './Navbar';

const imageContent = {
    position: "relative",
    top: '8vh'
}
const searchBarContent = {
    position: "absolute",
    top: '50%',
    left: '25%',
    width: '50%',
    alignItems: "center",
}
export default function Home() {

    const [journeyDate, setJourneyDate] = useState('');
    const navigate = useNavigate();
    const { fromCity, toCity, setFromCity, setToCity } = useContext(JourneyContext);

    const checkToaster = () => {
        if (!fromCity || !toCity || !journeyDate) {
            toast.error("All fields are required!");
        }
        else {
            navigate('/results');
        }
    }

    function handleFromTo() {
        const city1 = fromCity;
        const city2 = toCity;

        setFromCity(city2);
        setToCity(city1);
    }
    return (
        <div>
            <Navbar />
            <div style={imageContent}>
                <Image className='w-100' src={'https://st.redbus.in/Images/INDOFFER/FESTIVE200/Hero01.png'} />
                <InputGroup className="mb-3" style={searchBarContent}>
                    <Form.Control aria-label="Text input with dropdown button" value={fromCity} onChange={(e) => { setFromCity(e.target.value) }} placeholder='From' style={{ cursor: 'pointer' }} />
                    <BsArrowLeftRight onClick={handleFromTo} style={{ color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '3px', border: '2px solid red', borderRadius: '50%', backgroundColor: 'red', margin: '0 5px' }} />
                    <Form.Control aria-label="Text input with dropdown button" value={toCity} onChange={(e) => { setToCity(e.target.value) }} placeholder='To' style={{ cursor: 'pointer' }} />
                    <Form.Control aria-label="Text input with dropdown button" value={journeyDate} onChange={(e) => { setJourneyDate(e.target.value) }} placeholder="Date" type="date" style={{ cursor: 'pointer' }} />
                    <button className="btn btn-danger" onClick={checkToaster}>Search Buses</button><Toaster />
                </InputGroup>
            </div>
        </div>
    )
}