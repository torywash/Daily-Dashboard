// imports
import { useState, useEffect } from 'react'
import './App.css'

// app functions and events
function App() {
  // placeholders
  const local_temp = '75 F'
  const local_cond = 'windy'
  const local_town = 'cedar falls'
  const verse = 'for so God loved the world'

  // time dependent header
  const userName = 'Tory'
  const hour = new Date().getHours()

  let userPrompt = ''
  if (hour >= 4 && hour < 12) {
    userPrompt = `Good Morning, ${userName}!`
  } else if (hour >= 12 && hour < 17) {
    userPrompt = `Good Afternoon, ${userName}!`
  } else if (hour >= 17 && hour <= 21) {
    userPrompt = `Good Evening, ${userName}!`
  } else {
    userPrompt = `You're a night owl, ${userName}!`
  }

  // time for our clock
  const [clock, setClock] = useState(() => formatTime(new Date()))

  // update the clock every 1 sec
  useEffect(() => {
    const timerId = setInterval(() => {
      setClock(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  // format the time
  function formatTime(date) {
    const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
    const day_ofweek = String(weekday[date.getDay()]).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hrs = String(date.getHours()).padStart(2, '0')
    const mins = String(date.getMinutes()).padStart(2, '0')
    return `${day_ofweek} ${day} | ${local_temp} | ${hrs}:${mins}`
  }

  // what will be displayed
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
            <h2>Daily Verse</h2>
            <span id="verse-otd">{verse}</span>
          </div>
          <div class="body-container card">
            <h2>Calendar</h2>
          </div>
        </div>
      </section>
    </>
  )
}

// show the app to the 
export default App