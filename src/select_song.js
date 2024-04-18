import React, { useEffect, useState } from 'react';
import './select_songs.css';

function Select_song(){
     const [inputs,setInputs] = useState({});
     const [liked,setLiked] = useState(false);
     


     const handleChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;
    
        setInputs(inputs=>({...inputs,[name]:value}));

        if(name==='liked'){
            if(value==='Yes') setLiked(true);
            else setLiked(false);
        }
     }
     const handleSubmit = (ev)=>{
        ev.preventDefault();
       const isEmptyField=Object.values(inputs).some(value=>value==='');
       if(isEmptyField){
        alert('Empty Fields Detected');
        return;
       }
      
    
   
    console.log(inputs);
    const formData={
        ...inputs
    };
    fetch('/api/submit',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    }).then(response=>response.json())
    .then(data=>{
      console.log("form data recieved:",data);
      alert("form done!");
    }).catch(error=>{
      console.error("error submitting:",error);
      alert("error submitting form");
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
          <form className = "formie" onSubmit={handleSubmit}>
          <label>Enter your Username: 
          <input type="text"
          name = "userName"
          value = {inputs.userName||""}
          onChange={handleChange}
         />
        </label><br></br>
        <br></br>
        <label >Enter songName: 
          <input type="text"
          name = "songName"
          value = {inputs.songName||""}
          onChange={handleChange}
         />
        </label>
        <br></br>
        <br></br>
        <label>
            Liked or not?
            <input type = 'radio' name = 'liked' value='Yes' onChange={handleChange}/>Liked<br></br>
            <input type = 'radio' name = 'liked' value='No' onChange={handleChange}/>Not Liked<br></br>
        </label>
           <p className = 'like'>You selected: {(liked) ? 'Liked':'Not Liked'}</p>
      <br></br>
       <br></br>
       <label >Enter AlbumName: 
          <input type="text"
          name = "AlbumName"
          value = {inputs.AlbumName||""}
          onChange={handleChange}
         />
        </label>
        <br></br>
        <br></br>
      <input type = 'submit'/>
          </form>
        </>
    )
}
export default Select_song
