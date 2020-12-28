import React from 'react';
import './InfoBar.css';

const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer" >
                <p>ONLINE ICON</p>
                {/* <img className="onlineIcon" src={onlineIcon} alt="onlineImage"/> */}
                <h3> Room Name: {room}</h3>
            </div>
            <div className="rightInnerContainer" >
                <a href="/" >
                    {/* <img src={closeIcon} alt="closeImage"/> */}
                    CLOSE ICON
                </a>
            </div>

        </div>
    );

}

export default InfoBar;