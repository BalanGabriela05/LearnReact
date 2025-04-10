import React, {useState} from 'react';

function MyComponent(){
    const [car, setCar]= useState({year:2024, make: "Fiat", model: "500"});


    function handleYearChange(evenr){
        //safe update
       setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(evenr){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(evenr){
        setCar(c => ({...c, model: event.target.value}));
    }


    return(
        <div>
              <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
              <input type="number"  value={car.year} onChange={handleYearChange}/><br/>
              <input type="text"  value={car.make} onChange={handleMakeChange}/><br/>
              <input type="text"  value={car.model} onChange={handleModelChange}/><br/>

        </div>
    );


}
export default MyComponent