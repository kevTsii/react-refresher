export function List({tasks, filter, removeTask, toggleTask}) {
    const filterMap = {
        all: tasks,
        active: tasks.filter(t => !t.done),
        completed: tasks.filter(t => t.done)
    }
    const visibleTasks = filterMap[filter] ?? tasks
    return (
        <>
            <ul>
                { visibleTasks.map(task => (
                    <li key={task.id} style={{textDecoration: task.done ? "line-through" : "none"}}>
                        {task.name}
                        <button name="remove" onClick={() => removeTask(task.id)}>Supprimer</button>
                        <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                    </li>
                ))}
            </ul>
        </>
    )
}