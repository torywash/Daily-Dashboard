// imports
import { useState, useEffect } from 'react'
import Silk from './Silk'
import PromptModal from './PromptModal'
import Clock from './Clock'
import './App.css'

// app functions and events
function App() {
  // placeholders
  const local_temp = '75 F'
  const local_cond = 'windy'
  const local_town = 'cedar falls'
  const verse = 'for so God loved the world'

  // time dependent header
  const [userName, setUserName] = useState('User')
  const hour = new Date().getHours()

  let userPrompt = ''
  let backgroundCol = ''
  if (hour >= 4 && hour < 12) {
    userPrompt = `Good Morning, ${userName}!`
    backgroundCol = '#543a81'
  } else if (hour >= 12 && hour < 17) {
    userPrompt = `Good Afternoon, ${userName}!`
    backgroundCol = '#4b2a83'
  } else if (hour >= 17 && hour <= 21) {
    userPrompt = `Good Evening, ${userName}!`
    backgroundCol = '#441760'
  } else {
    userPrompt = `You're a night owl, ${userName}!`
    backgroundCol = '#301e50'
  }

  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const savedName = localStorage.getItem('dashboardUserName')
    const promptShown = localStorage.getItem('dashboardPromptShown') === 'true'

    if (savedName) {
      setUserName(savedName)
    }
    if (!promptShown) {
      setShowPrompt(true)
    }
  }, [])

  function handlePromptSubmit(name) {
    if (!name) return
    localStorage.setItem('dashboardUserName', name)
    localStorage.setItem('dashboardPromptShown', 'true')
    setUserName(name)
    setShowPrompt(false)
  }

  // what will be displayed
  return (
    <>
      <div className="app-shell">
        <div className="background-wrap">
          <Silk color={backgroundCol}/>
        </div>

        <section id="main">
          <div className="head-container">
            <h1>{userPrompt}</h1>
            <Clock localTemp={local_temp} />
          </div>
          <div className="body-container">
            <div className="body-container card">
              <h2>Weather</h2>
              <span id="temperature">{local_temp}</span>
              <span id="conditions">{local_cond}</span>
              <span id="town">{local_town}</span>
            </div>
            <div className="body-container card">
              <h2>Daily Verse</h2>
              <span id="verse-otd">{verse}</span>
            </div>
            <div className="body-container card">
              <h2>Calendar</h2>
            </div>
          </div>
        </section>
        {showPrompt && <PromptModal onSubmit={handlePromptSubmit} />}
      </div>
    </>
  )
}

// show the app to the 
export default App