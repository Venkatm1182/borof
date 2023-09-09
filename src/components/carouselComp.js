import React from 'react'
import "../styles/CarouselCom.css"

function CarouselComp(props) {
    var index=props.id;
    var click=props.onClick
    var image=props.image
    var name=props.name
    var releasedate=props.releasedate
  return (
    <div className='carouselDiv' onClick={()=>{
        // console.log(index);
        click(index)
    }}>
        <img className='carImage' src={image}></img>
        <div className='descriptionDiv'>
          <h1>{name}</h1>
          <h2>{releasedate}</h2>
        </div>
    </div>
  )
}

export default CarouselComp