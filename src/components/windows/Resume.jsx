import React from 'react'
import MacWind from './MacWind'

import "./resume.scss"

const Resume = ({windowName, setWindowState}) => {
  return (
    <MacWind windowName={windowName} setWindowState={setWindowState}>
      <div className="resume-window">
        <iframe src="/resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWind>
  )
}

export default Resume