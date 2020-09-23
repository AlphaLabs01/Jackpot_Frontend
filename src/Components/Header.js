import React from "react";
import "../Style/Header.css";
import NavigatorButton from "./NavigatorButton";

import menu from "../assets/menu_emoji_n.jpg";

const header = (props) => {


 const domain='http://moradabadsatta.com';
//const domain='http://localhost:3000';

    const handleToggle=()=>{
        document.querySelector('.nav-row').classList.toggle('active');
        document.querySelector('.toggle').classList.toggle('open');
    }
    return (
        // <div>
        <nav className="sticky">
            <div className="row nav">
                <div className="col-sm-2">
                    <div className="box small">
                        <img src={menu} alt="Cloudy Sky"></img>
                    </div>
                    {/* <img style={{height:"50%", width:"50%", padding:"0px", cursor:"pointer",}} src={menu} alt="boohoo" className="img-responsive"/> */}
                </div>
                <div className="row col-sm-10 ">
                     <div className="nav-row">
                    <NavigatorButton name="Home" url={`${domain}`} />
                    <NavigatorButton
                        name="Charts"
                        click={props.chartsClick}
                        region="Ghaziabad"
                        url={`${domain}/charts`} 
                    />

                    <NavigatorButton name="Add Game" url={`${domain}/addgame`} />
                    <NavigatorButton name="Leaks" url={`${domain}/leaks`} />
                    <NavigatorButton name="About Us" url={`${domain}/aboutUs`} click={props.aboutClick} />
                    <NavigatorButton name="" /></div>
                    {/* <NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/> */}
                  
                </div>
 <div className='toggle' onClick={handleToggle}><span className='bar' ></span></div>
            </div>
        </nav>
        // </div>
    );
};

export default header;
