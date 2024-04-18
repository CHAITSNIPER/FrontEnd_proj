import React, { useEffect, useState } from 'react';
import './buttons.css';

function Buttons(){
      const [operation,setOperation] = useState('');
    
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
            <p className="headme">CLICK TO PERFORM OPERATION</p>
            <button className = "buttons 1" name = "button1" value = "function1" onClick={handleClick}>Func1</button><br></br><br></br>
            <button className = "buttons 2" name = "button2" value = "function2" onClick={handleClick}>Func2</button><br></br><br></br>
            <button className = "buttons 3" name = "button3" value = "function3" onClick={handleClick}>Func3</button><br></br><br></br>
            <button className = "buttons 4" name = "button4" value = "function4" onClick={handleClick}>Func4</button><br></br><br></br>
            <button className = "buttons 5" name = "button5" value = "function5" onClick={handleClick}>Func5</button><br></br><br></br>
     </div>
     </>
    )
}

export default Buttons