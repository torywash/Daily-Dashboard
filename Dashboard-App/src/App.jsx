// imports
import { useState, useEffect } from 'react'
import './App.css'

// app functions and events
function App() {
  // time dependent header
  const userName = 'User'
  const hour = new Date().getHours()

  let userPrompt = ''
  if (hour >= 4 && hour < 12) {
    userPrompt = `Good Morning, ${userName}!`
  } else if (hour >= 12 && hour < 17) {
    userPrompt = `Good Afternoon, ${userName}!`
  } else if (hour >= 17 && hour <= 20) {
    userPrompt = `Good Evening, ${userName}!`
  } else {
    userPrompt = `You're a night owl, ${userName}!`
  }

  // time for our clock
  const [clock, setClock] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const timerId = setInterval(() => {
      setClock(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  function formatTime(date) {
    const hrs = String(date.getHours()).padStart(2, '0')
    const mins = String(date.getMinutes()).padStart(2, '0')
    return `${hrs}:${mins}`
  }

  return (
    <>
      <section id="main">
        <div className="head-container">
          <h1>{userPrompt}</h1>
          <span id="clock">{clock}</span>
        </div>
        <div className="body-container">
          <div class="body-container card">
            <h2>Weather</h2>
            <span id="temperature">{local_temp}</span>
            <span id="conditions">{local_cond}</span>
            <span id="town">{local_town}</span>
          </div>
          <div class="body-container card">
            <h2>Finances</h2>
            <span id="balance">{acct_balance}</span>
          </div>
          <div class="body-container card">
            <h2>Plans</h2>
          </div>
          <div class="body-container card">
            <h2>Daily Devotional</h2>
          </div>
        </div>
      </section>
    </>
  )
}

// show the app to the 
export default App