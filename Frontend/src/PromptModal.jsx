import { useState } from 'react'
import './App.css'

function PromptModal({ onSubmit }) {
    const [name, setName] = useState('')
    const [isClosing, setIsClosing] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        if (isClosing) return

        const trimmed = name.trim()
        if (!trimmed) return

        setIsClosing(true)
        window.setTimeout(() => {
            onSubmit?.(trimmed)
        }, 200)
    }

    return (
        <div className={isClosing ? 'modal-overlay fade-out' : 'modal-overlay'}>
            <div className={isClosing ? 'body-container closing' : 'body-container'}>
                <h1>What Should We Call You?</h1>
                <form id="getUserName" onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name="name"
                            placeholder="We're So Excited..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <button type="submit">Sign The Papers!</button>
                </form>
            </div>
        </div>
    )
}

export default PromptModal