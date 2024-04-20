import React, { useEffect, useState } from 'react';
import './buttons.css';

function Buttons(){
      const [operation,setOperation] = useState('');
      const [search,setSearch] = useState('');
      const handleChange = (ev)=>{
          const name = ev.target.name;
          const value = ev.target.value;
          if(name==='search') setSearch(value);
      }
    
      const handleClick = (ev) => {
        const operationValue = ev.target.value; // Get the value directly from the clicked button
        setOperation(operationValue); // Update the state
    
        fetch('/api/click', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({operation:operationValue}) // Use the updated value
        })
        .then(response => response.json())
        .then(data => {
            console.log(`You clicked ${operationValue}`, data);
        }).catch(error => {
            console.error("Didn't receive response", error);
            alert('No response');
        });
    }

    const [backendData,setBackendData]=useState('');
    useEffect(()=>{
          fetch("/api").then(
            response=>response.json()
          ).then(
            data => {setBackendData(data)}
          )
    },[]);

    return(
      <>
        <div className = "but">
            <p className="headme">Audit and search</p>
            <button className = "buttons 1" name = "button1" value = "function1" onClick={handleClick}>Func1</button><br></br><br></br>
            <label className='Search'>Search User: </label>
            <input type ="text" name = "search" value = {search} onChange = {handleChange}/><br></br>
            <button className = 'search' name = 'search' onClick = {handleClick}>Search</button>
     </div>

     <div className = "Audit">
        <p>AUDIT </p>
     </div>
     </>
    )
}

export default Buttons