import React from 'react';
import '../Style/NavigatorButton.css'

const NavigatorButton = (props) => {
    return (
        // <button className="col-sm-2" onClick={()=>props.click(props.region)}>
        // 	<div className="nav-button"> <button className="col-sm-2" >
        //     <b>{props.name}</b>
        // </button></div>
        <div className="nav-button"><a href={props.url}><button  >
            <b>{props.name}</b>
        </button></a> </div>
    )
}

export default NavigatorButton;