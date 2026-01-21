import React from 'react'
import { Rnd } from "react-rnd"
import "./window.scss"

const MacWind = ({children}) => {
    return (
        <Rnd>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
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