import React, { useEffect, useState } from 'react'

import MacWind from "./MacWind"
import "./note.scss"

import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = () => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => {
                console.log(text);
                setMarkdown(text);
            });
    }, []);

    return (
        <MacWind>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language='typescript' style={a11yDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWind>
    )
}

export default Note