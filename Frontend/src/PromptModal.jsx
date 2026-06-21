import { useState } from 'react'
import './App.css'

function PromptModal({ onSubmit }) {
    const [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const trimmed = name.trim()
        if (!trimmed) return
        onSubmit?.(trimmed)
    }

    return (
        <div className="modal">
            <div className="body-container modal">
                <h1>What Should We Call You?</h1>
                <form id="getUserName" onSubmit={handleSubmit}>
                    <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="The Beginning!"
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