import { useState, useEffect } from 'react'
import './App.css'

function PromptModal({ onSubmit }) {
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('PromptModal MOUNTED, onSubmit?', typeof onSubmit)
        return () => console.log('PromptModal UNMOUNTED')
    }, [onSubmit])

    function handleSubmit(event) {
        event.preventDefault()
        const trimmed = name.trim()
        console.log('PromptModal handleSubmit:', { name, trimmed })
        if (!trimmed) return
        onSubmit?.(trimmed)
    }

    return (
        <div className="modal-overlay">
            <div className="body-container">
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