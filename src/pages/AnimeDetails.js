import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieComp from '../components/movieComp';
import "../styles/AnimeDetails.css"

function AnimeDetails() {

  const [count,setCount]=useState(0);
  const navigate=useNavigate();
  var location=useLocation();
  var id=location.state.id;
  const [object,setObject]=useState({});
  const [episodes,setEpisodes]=useState([]);
  const [isEpisode,setIsEpisode]=useState(false);
  const [isMovie,setIsMovie]=useState(false);
  // var [type,setType]=useState("Movie");
  var [isItem,setisItem]=useState(false);
  
  useEffect(()=>{
    axios.get("http://localhost:3001/anime-details/"+id).then((res)=>{
    setObject(res.data);
    console.log(res.data);
    // setType(res.data.type);
    if(res.data.type==="TV Series"){
      setEpisodes(res.data.episodesList.reverse());
      setIsEpisode(true);
      console.log(res.data.episodesList);
    }
    else{
      setIsMovie(true);
    }
    setisItem(true);
    // Object.keys(object).length===0
  }).then((err)=>{
    console.log(err);
    setCount(count+1);
    console.log(count);
    // setEpisodes([]);
    // setIsEpisode(false)
  })
  },[count])

  function movetoPlayer(animeId){
    navigate("/watch/"+animeId,{state:{id:animeId}})
  }

  if(!isItem){
    return <div className='DisplayDiv'>
      <h2 className='loadingh2'>Loading...</h2>
    </div>
  }
  return (
    <div className='DisplayDiv'>
      <MovieComp key={object.animeTitle} genres={object.genres} name={object.animeTitle} image={object.animeImg} releasedate={object.releasedDate}/>
      {isEpisode && <h2 className='episodeh2'>Episodes</h2>}
      <div className='episodesDiv'>
      {isEpisode && episodes.map((episode,index)=>{
          {/* console.log(episode.episodeNum) */}
          return <div className='episode' onClick={()=>movetoPlayer(episode.episodeId)} key={index}>{episode.episodeNum}</div>
        })}
      </div>
      {
        !isEpisode && <button>
          Watch Now
        </button>
      }
    </div>
  )
}

export default AnimeDetails