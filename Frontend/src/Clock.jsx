import { useState, useEffect } from 'react'
import './App.css'

function Clock() {
    const [clock, setClock] = useState('')

    useEffect(() => {
        function formatTime(date) {
            const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
            const day = String(date.getDate()).padStart(2, '0')
            const hrs = date.getHours()
            const mins = String(date.getMinutes()).padStart(2, '0')
            const secs = String(date.getSeconds()).padStart(2, '0')
            const meridian = hrs < 12 ? 'AM' : 'PM'
            return `${weekday[date.getDay()]} ${day} | ${String(hrs).padStart(2, '0')}:${mins}:${secs} ${meridian}`
        }

            setClock(formatTime(new Date()))
            const timerId = setInterval(() => setClock(formatTime(new Date())), 1000)
            return () => clearInterval(timerId)
    }, [])

    return <span id="clock">{clock}</span>
}

// return the clock to be displayed
export default Clock