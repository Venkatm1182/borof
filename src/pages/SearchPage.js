import React, { useEffect, useState } from 'react'
import "../styles/HomePage.css"
import WatchComp from '../components/watchComp'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function SearchPage() {
    const [count,setCount]=useState(0);
    var navigate=useNavigate();
    const [watchItems,setWatchItems]=useState([]);
    const [length,setLength]=useState("");
    // const [searchVal,setSearchVal]=useState("Searching...")
    var location=useLocation();
    console.log(location.state.search);
    
    useEffect(()=>{
        axios.get("http://localhost:3001/search",{params:{'keyw':location.state.search,"page":1}}).then((response)=>{
        setWatchItems(response.data);
        // setSearchVal("Found "+watchItems.length +" Results");
        setLength("Found "+response.data.length+" Results");
    }).catch((err)=>{
        setCount(count+1);
        console.log(err);
        console.log(count);
    })
    },[count])

    function moveToInfo(animeId){
        navigate("/anime-details/"+animeId,{state:{id:animeId}});
    }

  return (
    <div className='searchDiv'>
        <Header></Header>
        <h2 className='h2Search'>{length}</h2>
        <div className='homeGrid'>
            {watchItems.map((item,index)=>{
                return <WatchComp key={index} id={item.animeId} onClick={moveToInfo} image={item.animeImg} title={item.animeTitle}></WatchComp>
            })}
        </div>
    </div>
  )
}

export default SearchPage