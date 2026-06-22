// imports
import {useState, useEffect } from 'react'
import './App.css'

// weather component function
function Weather() {

    // placeholders
    const local_temp = '75 F'
    const local_cond = 'windy'
    const local_town = 'cedar falls'

    // return component
    return (
        <>
            <h2>Weather</h2>
            <span id="temperature">{local_temp}</span>
            <span id="conditions">{local_cond}</span>
            <span id="town">{local_town}</span>
        </>
    )
}

// export the component to be used
export default Weather