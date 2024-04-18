import React, { useState } from 'react';
import Album from './Album.js';
import App from './App.js';
import Buttons from './Buttons.js';
import './mainFunc.css';
import SelectSong from './select_song';

function MainFunc(){
    const [page,setPage] = useState('user');
     
    const handleChange = (ev)=>{
        setPage(ev.target.value);
    }


    return(
        <>
        <div className = "dashboard">
            <p className='head'>DashBoard</p><br></br>
        <button className = "button 1" name = 'User' value = 'user' onClick = {handleChange}>User Details</button><br></br>
        <button className = "button 2" name = 'song' value = 'song' onClick = {handleChange}>Song Details</button><br></br>
        <button className = "button 3" name = 'album' value = 'album' onClick={handleChange}>Album details</button><br></br>
        <button className = "button 4" name = 'buttons' value = 'buttons' onClick={handleChange}>Function Buttons</button><br></br>
        <br></br>
        <br></br>
        </div>
        {page === 'user' && <App/>}
        {page==='song' && <SelectSong/>}
        {page==='album' && <Album/>}
        {page==='buttons' &&<Buttons/>}
        </>
    )
}
export default MainFunc;