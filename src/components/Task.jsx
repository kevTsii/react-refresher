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
                    : <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={handleKeyDown}/>
                }

                <button onClick={() => setEditing(true)}>Edit</button>
                <button className="btn-remove" onClick={() => removeTask(task.id)}>
                    Supprimer
                </button>
            </li>
        </>
    )
}