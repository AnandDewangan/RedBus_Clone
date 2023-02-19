import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import JourneyContext from '../JourneyContext';
import Navbar from './Navbar';
import Home from './Home';

export default function Journey({Component}) {
    const navigate = useNavigate();
    const {fromCity, toCity} = useContext(JourneyContext);

    useEffect(() => {
    
      if(!localStorage.getItem("token")){
          navigate("/login")
      }
      else if (!fromCity || !toCity) {
          navigate("/");
        }
    }, []);

  return (
    <div>
        <Navbar/>
        <Home/>
        <Component/>
    </div>
  )
}
