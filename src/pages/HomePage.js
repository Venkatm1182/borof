import React, { useEffect, useState } from 'react'
import Carousel from "react-elastic-carousel";
import CarouselComp from '../components/carouselComp';
import axios from "axios";

// import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';
import "../styles/HomePage.css"
import { useNavigate } from 'react-router-dom';
import WatchComp from '../components/watchComp';
import Header from '../components/Header';

function HomePage() {
    const [count,setCount]=useState(0);
    const navigate=useNavigate();

    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:550,itemsToShow:2},
        {width:768,itemsToShow:2},
        {width:1200,itemsToShow:2},
    ]

    const [isCarItems,setisCarItems]=useState(false);
    const [carouselItems,setCarousalItems]=useState([]);
    const [watchItems,setWatchItems]=useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3001/anime-movies").then((response)=>{
            if(response.data!=="error"){
                setCarousalItems(response.data);
                setisCarItems(true);
                setWatchItems(response.data);
                console.log(response.data);
            }
            else{
                console.log("error occured")
            }
            
        
    }).catch(err=>{
        console.log(err);
        setisCarItems(false);//
        setCarousalItems([]);//
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
        {<Carousel  autoPlaySpeed={4000} enableAutoPlay showArrows={false} stopOnHover={true} useKeyboardArrows={true}>
            {
                isCarItems &&
                carouselItems.map((item,index)=>{
                return <CarouselComp key={index} id={item.animeId} name={item.animeTitle} image={item.animeImg}  onClick={moveToInfo} releasedate={item.releasedDate}/>
            })}
        </Carousel> }
        <h2 className='h2'>Watch now</h2>
        <div className='homeGrid'>
            {watchItems.map((item,index)=>{
                return <WatchComp key={index} id={item.animeId} image={item.animeImg} title={item.animeTitle} onClick={moveToInfo}></WatchComp>
            })}
        </div>
    </div>
  )
}

export default HomePage



        // <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000} cssModule={AwesomeSliderStyles}>
        //     {carouselItems.map((item,index)=>{
        //         console.log(item.animeId);
        //         return <CarouselComp key={index} id={item.animeId} name={item.animeTitle} image={item.animeImg}  onClick={moveToInfo}/>
        //     })}
        // </AutoplaySlider>