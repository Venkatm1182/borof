import React from 'react'
import "../styles/CarouselCom.css"

function MovieComp(props) {
    // var index=props.id;
    // var click=props.onClick
    var genres=props.genres
    // var genre=genres.join(",");
    var image=props.image
    var name=props.name
    var releasedate=props.releasedate
  return (
    <div className='carouselDiv' >
        <img className='carImage' src={image}></img>
        <div className='descriptionDiv'>
          <h1>{name}</h1>
          <h2>{releasedate}</h2>
          <h3>genre : {genres}</h3>
        </div>
    </div>
  )
}

export default MovieComp