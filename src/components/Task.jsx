import {useState} from "react";

export function Task({task, toggleTask, removeTask, updateTask}) {
    const [editing, setEditing] = useState(false)
    const [newName, setNewName] = useState(task.name)

    const handleUpdateTask = () => {
        if (newName.trim().length === 0) return
        updateTask(task.id, newName.trim())
        setEditing(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleUpdateTask()
    }
    
    return (
        <>
            <li key={task.id} className={`todo-item ${task.done ? "done" : ""}`}>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                />
                {!editing
                    ? <span className="todo-item-name">{task.name}</span>
                    : <input
                        className="todo-edit-input"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                      />
                }

                <button className="btn-icon btn-edit" title="Modifier" onClick={() => setEditing(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                </button>
                <button className="btn-icon btn-remove" title="Supprimer" onClick={() => removeTask(task.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                        <path d="M10 11v6M14 11v6"/>
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                </button>
            </li>
        </>
    )
}