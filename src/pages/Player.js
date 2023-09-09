import React, { useEffect, useState } from 'react'
import "../styles/Player.css"
import { useLocation } from 'react-router-dom'
import axios from 'axios';

function Player() {
  const [count,setCount]=useState(0);
  const location=useLocation();
  const id=location.state.id;
  const [playlist,setPlaylist]=useState([]);
  const [url,setUrl]=useState("");

  useEffect(()=>{
    axios.get("http://localhost:3001/vidcdn/watch/"+id).then((response)=>{
    setPlaylist(response.data);
    setUrl(response.data.Referer);
    console.log(response.data.Referer);
  }).then((err)=>{
    console.log(err);
    setCount(count+1);
    console.log(count);
  })
  },[count])
  // console.log(location.state.id);
  return (
    <div className='mainPlayer'>
        <iframe className='playerFrame' src={url} allowFullScreen={true}></iframe>
    </div>
  )
}

export default Player