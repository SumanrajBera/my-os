import React from 'react'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'


const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      {/* <Github /> */}
      {/* <Note /> */}
      <Resume />
    </main>
  )
}

export default App