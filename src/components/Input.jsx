import React, {useState} from "react";

export const Input = ({onAddTask}) => {
    const [taskName, setTaskName] = useState("")

    const handleAddTask = () => {
        if (taskName.trim().length === 0) return
        onAddTask({id: Date.now(), name: taskName.trim(), done: false})
        setTaskName("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleAddTask()
    }

    return (
        <div className="todo-input-row">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nouvelle tâche..."
            />
            <button className="btn-add" onClick={handleAddTask}>Ajouter</button>
        </div>
    )
}
