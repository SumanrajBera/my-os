import React from 'react'
import { Rnd } from "react-rnd"
import "./window.scss"

const MacWind = ({ children, width = "40vw", height = "40vh", windowName, setWindowState }) => {
    return (
        <Rnd
            default={
                {
                    width: width,
                    height: height,
                    x: 300,
                    y: 200
                }
            }
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div 
                        onClick={() => {setWindowState(state => ({...state, [windowName]: false}))}}
                        className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title">
                        <p>sumanrajBera - zsh</p>
                    </div>
                </div>
                <div className="mainContent">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWind