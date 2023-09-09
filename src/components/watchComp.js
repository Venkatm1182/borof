import React from 'react'
import "../styles/watchComp.css"

function WatchComp(props) {
    var title=props.title.slice(0,25);
    var click=props.onClick;
    var id=props.id
  return (
    <div className='watchDiv' onClick={()=>click(id)}>
        <div className='subDivv'>
            <img src={props.image} height="400px" width="320px"></img>
            <h3 className='h3'>{title}</h3>
        </div>
    </div>
  )
}

export default WatchComp