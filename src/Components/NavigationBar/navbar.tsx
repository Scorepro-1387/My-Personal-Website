import React from "react";
import './style.css';
import { 
    BsFillFileEarmarkPersonFill,
    BsBoxSeam,
    BsGithub,
    BsTelephoneOutbound
} from "react-icons/bs";
import {IoShareSocialOutline} from "react-icons/io5";
import Tooltip from "../Tooltip/Tooltip";
import {IoIosMenu} from 'react-icons/io';

function Navbar(){
    return(
        <div className="main-nav-div" style={{}}>
            <div className="nav-skeleton">
                <div style={{}}>
                    <div className="main-nav-titl" style={{display: "flex"}}>
                        <img src={require("./titlelogo.png")} className="maintitleimage"/>
                        <h2 className="nav-title"><p className="salar">Salar</p> <p className="seyed">Seyed</p> <span>Hashemian</span></h2>
                    </div>
                </div>
                <div className="nav-buttons">
                    <div className="desktopicon">
                        <Tooltip content="About" direction="bottom">
                            <p><BsFillFileEarmarkPersonFill size={23}/></p>
                        </Tooltip>
                    </div>
                    <div className="desktopicon">
                        <Tooltip content="Projects" direction="bottom">
                            <p><BsBoxSeam size={23}/></p>
                        </Tooltip>
                    </div>
                    <div className="desktopicon">
                        <Tooltip content="Github" direction="bottom">
                            <p><BsGithub size={23}/></p>
                        </Tooltip>
                    </div>
                    <div className="desktopicon">
                        <Tooltip content="Socials" direction="bottom">
                            <p><IoShareSocialOutline size={23}/></p>
                        </Tooltip>
                    </div>
                    <div className="desktopicon">
                        <Tooltip content="Conatct Info" direction="bottom">
                            <p><BsTelephoneOutbound size={23}/></p>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar