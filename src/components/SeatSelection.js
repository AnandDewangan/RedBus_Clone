import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./seatSelection.css";

const SeatSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  function seatNum(i, j) {
    return 8 * i + j + 1;
  }

  return (
    <Container className="bg-danger mt-5 mw-100 p-5 d-flex justify-content-center align-items-center">
      <div className="seats bg-white p-4">
        {[1,2,3].map((seatRow, i)=>{
          return (
            <div className={`row mt-${Math.ceil(seatRow*1.5)}`} key={seatRow}>
              {[1,2,3,4,5,6,7,8].map((seat, j)=>{
                return(
                <div className={`seat ${selectedSeat.includes(seatNum(i, j)) ? "bg-success" : ''}`}
                key={seatNum(i, j)}
                onClick={()=>{
                  const previousSeat = [...selectedSeat];
                  if(selectedSeat.includes(seatNum(i,j))){
                    const allSeatExceptedCurrent = previousSeat.filter(currentSeat=>{
                      return currentSeat !== seatNum(i, j);
                    })
                    setSelectedSeat(allSeatExceptedCurrent)
                  }
                  else{
                    setSelectedSeat([...previousSeat, seatNum(i, j)]);
                  }
                }}
                >{seatNum(i,j)}</div>
                )
              })}
            </div>
          )
        })}
        {selectedSeat.length?<Button variant="success rounded-0 mt-4">
            Book Tickets
        </Button>:null}
      </div>
    </Container>
  );
};

export default SeatSelection;