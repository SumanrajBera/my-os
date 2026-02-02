import React from 'react'
import Terminal from 'react-console-emulator'
import MacWind from './MacWind'
import "./cli.scss"


const Cli = ({windowName, setWindowState}) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `
Hi, I'm Sumanraj Bera.
Frontend-focused developer exploring AI + Web.
I enjoy building interactive UIs, solving DSA, and shipping real projects.
`
        },

        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `
Frontend : React, JavaScript, HTML, CSS, Tailwind
Backend  : Node.js, Express
Tools    : Git, GitHub, VS Code, Linux
Other    : DSA, Problem Solving
`
        },

        projects: {
            description: 'Show featured projects',
            usage: 'projects',
            fn: () => `
1. Rotating Canvas Stars
   → https://github.com/SumanrajBera/day91-self

2. Portfolio CLI Terminal (this site)
   → Interactive React console UI
`
        },

        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/SumanrajBera', '_blank')
                return 'Opening GitHub...'
            }
        },

        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => {
                window.open('/resume.pdf', '_blank') // place resume in public/
                return 'Opening resume...'
            }
        },

        contact: {
            description: 'Contact information',
            usage: 'contact',
            fn: () => `
                Email  : berasumanraj@gmail.com
                GitHub : https://github.com/SumanrajBera
                LinkedIn : (add your link)
            `
        },

        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    return (
        <>
            <MacWind windowName={windowName} setWindowState={setWindowState}>
                <div className="cli-window">
                    <Terminal
                        commands={commands}
                        welcomeMessage={`
                            Sumanraj Bera Portfolio CLI
                            Type "help" to get started.
                            Available commands:
                            help       - List all available commands.
                            about      - About me
                            skills     - List technical skills
                            projects   - Show featured projects
                            github     - Open GitHub profile
                            resume     - Download resume
                            contact    - Contact information
                            clear      - Clear terminal
                            echo       - Echo text
                            `}
                        promptLabel={'sumanrajBera:~$'}
                        promptLabelStyle={{ color: "green" }}
                    />
                </div>
            </MacWind>
        </>
    )
}

export default Cli