import React, { FC, useState } from "react";
import './style.css'
interface SkillmeterProps{
    Percent: string;
    Name: string;
    ImageLink: string;
}

const Skillmeter:FC<SkillmeterProps> = (props) => {
    const fillPercent = ((Number(props.Percent)*190)/100)+"px"
    const displayPercent =props.Percent + "%"

    return(
        <div className="main-skillmeter-div" style={{
            margin: "0px",
            marginTop: "30px"
        }}>
            <div className="skillmeter-skeleton">
                <div className="skillmeter-header" style={{
                    display: "flex",
                }}>
                    <img draggable="false" src={props.ImageLink} style={{
                        height: "40px",
                        marginRight: "10px",
                        marginTop: "10px"

                    }}/>
                    <h3 style={{color: "#fff"}}>{props.Name}</h3>
                </div>
                <div className="skillmeter-meter" style={{
                    position: "relative"
                }}>
                    <div style={{
                        backgroundColor: "#000",
                        width: "200px",
                        height: "15px",
                        borderRadius: "20px",
                        position :"absolute",
                        padding: "5px"
                    }}/>
                    <div style={{
                        position: "absolute",
                        backgroundColor: "#F3EFE0",
                        width: fillPercent,
                        height: "15px",
                        marginTop: "5px",
                        marginLeft: "9px",
                        borderRadius: "20px"
                    }}><p style={{marginTop: "-1px",marginLeft:"10px"}}>{displayPercent}</p></div>
                </div>
            </div>
        </div>
    );
}

export default Skillmeter