import React, {useState} from "react";

export const Input = ({onAddTask}) => {
    const [taskName, setTaskName] = useState("")

    const handleAddTask = () => {
        if (taskName.length === 0) return
        onAddTask({id: Date.now(), name: taskName, done: false})
        setTaskName("")
    }

    return (
        <>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
            <button name="add" onClick={handleAddTask}>Ajouter</button>
        </>
    )
}