// imports
import { useState, useEffect } from 'react'
import './App.css'

// Verse component function
function Verse() {

    // placeholders
    const verse = 'for so God loved the world'

    // return the component
    return (
        <>
            <h2>Daily Verse</h2>
            <span id="verse-otd">{verse}</span>
        </>
    )
}

// export the component to be used
export default Verse