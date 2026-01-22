import React from 'react'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'


const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <Github />
    </main>
  )
}

export default App