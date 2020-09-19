import React from "react";
import "../Style/Header.css";
import NavigatorButton from "./NavigatorButton";
import menu from "../assets/menu_emoji_n.jpg";

const header = (props) => {
    return (
        // <div>
        <nav>
            <div className="row nav">
                <div className="col-sm-2">
                    <div className="box small">
                        <img src={menu} alt="Cloudy Sky"></img>
                    </div>
                    {/* <img style={{height:"50%", width:"50%", padding:"0px", cursor:"pointer",}} src={menu} alt="boohoo" className="img-responsive"/> */}
                </div>
                <div className="row col-sm-10 ">
                     <div className="nav-row">
                    <NavigatorButton name="Home" />
                    <NavigatorButton
                        name="Charts"
                        click={props.chartsClick}
                        region="Ghaziabad"
                    />

                    <NavigatorButton name="Add Game" />
                    <NavigatorButton name="Leaks" />
                    <NavigatorButton name="About Us" click={props.aboutClick} />
                    <NavigatorButton name="" /></div>
                    {/* <NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/><NavigatorButton name=""/> */}
                  
                </div>
 <div className='toggle' onClick={()=>document.querySelector('.nav-row').classList.toggle('active')}><span className='bar' ></span></div>
            </div>
        </nav>
        // </div>
    );
};

export default header;
