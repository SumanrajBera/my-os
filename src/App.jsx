import React from 'react'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWind from './components/windows/MacWind'

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <MacWind />
    </main>
  )
}

export default App