import React from 'react'
import MacWind from './MacWind'

import "./spotify.scss"

const Spotify = ({ windowName, setWindowState }) => {
    return (
        <MacWind width='30vw' height='60vh' windowName={windowName} setWindowState={setWindowState}>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/55qZOc8UFh0noDfvNx9U0n?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWind>
    )
}

export default Spotify