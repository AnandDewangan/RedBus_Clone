import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResult from './components/SearchResult';
import { useState } from 'react';
import JourneyContext from './JourneyContext';
import Journey from './components/Journey';
import SeatSelection from './components/SeatSelection';
import Login from './components/Login';

function App() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  return (
    <div className="App">
      <JourneyContext.Provider value={
        {
          fromCity: fromCity,
          toCity: toCity,
          setFromCity: setFromCity,
          setToCity: setToCity
        }
      }>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/results' element={<Journey Component={SearchResult}/>} />
            <Route path='/book-seats' element={<Journey Component={SeatSelection}/>} />
          </Routes>
        </BrowserRouter>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
