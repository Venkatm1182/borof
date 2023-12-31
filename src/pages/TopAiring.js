import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css"
import { useState,useEffect } from 'react';
import Header from '../components/Header';
import WatchComp from '../components/watchComp';
import axios from 'axios';

function TopAiring() {
    const [count,setCount]=useState(0);
    const navigate=useNavigate();

    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:550,itemsToShow:2},
        {width:768,itemsToShow:2},
        {width:1200,itemsToShow:2},
    ]

    const [isCarItems,setisCarItems]=useState(false);
    // const [carouselItems,setCarousalItems]=useState([]);
    const [watchItems,setWatchItems]=useState([]);
    
    useEffect(()=>{
        axios.get("https://borob.onrender.com/top-airing").then((response)=>{
            // setCarousalItems(response.data);
            // setisCarItems(true);
            setisCarItems(true);
            setWatchItems(response.data);
        console.log(response.data);
        
    }).catch(err=>{
        console.log(err);
        // setWatchItems([]);
        // setisCarItems(false);
        setCount(count+1);
        console.log(count);
    }
    )
    },[count])

    function moveToInfo(animeId){
        navigate("/anime-details/"+animeId,{state:{id:animeId}});
    }
    
    if(!isCarItems){
        return <center className='centerDiv'>
            <div className='loading-spinner'></div>
            <h3 className='loading-h3'>Loading Please Wait...</h3>
        </center>
    }
  return (
    <div className='homeDiv'>
    <Header></Header>
        <h2 className='h2'>Top Shows Streaming</h2>
        <div className='homeGrid'>
            {watchItems && watchItems.map((item,index)=>{
                return <WatchComp key={index} id={item.animeId} image={item.animeImg} title={item.animeTitle} onClick={moveToInfo}></WatchComp>
            })}
        </div>
    </div>
  )
}

export default TopAiring