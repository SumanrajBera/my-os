import React from 'react'
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({ windowState, setWindowState }) => {
    return (
        <footer className='dock'>
            <div
                onClick={() => { setWindowState(state => ({ ...state, github: true })) }}
                className="icon github"><img src="/icons/github.svg" alt="" /></div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, note: true })) }}
                className="icon note"><img src="/icons/note.svg" alt="" /></div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, resume: true })) }}
                className="icon pdf"><img src="/icons/pdf.svg" alt="" /></div>
            <div className="icon calender"><img src="/icons/calender.svg" alt="" /></div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, spotify: true })) }}
                className="icon spotify"><img src="/icons/spotify.svg" alt="" /></div>
            <div className="icon mail"><img src="/icons/mail.svg" alt="" /></div>
            <div className="icon link"><img src="/icons/link.svg" alt="" /></div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, cli: true })) }}
                className="icon cli"><img src="/icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock