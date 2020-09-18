import React from 'react';
import '../Style/NavigatorButton.css'

const NavigatorButton = (props) => {
    return (
        // <button className="col-sm-2" onClick={()=>props.click(props.region)}>
        	 <button className="col-sm-2" >
            <b>{props.name}</b>
        </button>
    )
}

export default NavigatorButton;