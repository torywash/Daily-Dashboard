// imports
import { useState, useEffect } from 'react'
import Silk from './Silk'
import PromptModal from './PromptModal'
import Weather from './Weather'
import Clock from './Clock'
import Verse from './Verse'
import Calendar from './calendar'
import './App.css'

// app functions and events
function App() {

  // time dependent header
  const [userName, setUserName] = useState(
    () => localStorage.getItem('dashboardUserName') || 'User'
  )

  // show the prompt only if the saved flag is not true
  //const [showPrompt, setShowPrompt] = useState(
    //() => localStorage.getItem('dashboardPromptShown') !== 'true'
  //)
  // show prompt for debugging purposes
  const [showPrompt, setShowPrompt] = useState(true)

  // set the hour variable
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
            <div className="head-content">
              <h1>{userPrompt}</h1>
              <Clock />
            </div>
          </div>
          <div className="body-container">
            <div class="body-container left">
              <div className="body-container card">
                <Weather />
              </div>
              <div className="body-container card">
                <Verse />
              </div>
            </div>
            <div class="body-container right">
              <div className="body-container card">
                <Calendar />
              </div>
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