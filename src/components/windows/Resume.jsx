import React from 'react'
import MacWind from './MacWind'

import "./resume.scss"

const Resume = () => {
  return (
    <MacWind>
      <div className="resume-window">
        <iframe src="/resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWind>
  )
}

export default Resume