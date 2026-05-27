export function List({tasks, filter, removeTask, toggleTask}) {
    const visibleTasks = filter === "all" ? tasks : filter === "active" ? tasks.filter(t => !t.done) : tasks.filter(t => t.done)
    return (
        <>
            <ul>
                { visibleTasks.map(task => (
                    <li key={task.id} style={{textDecoration: task.done ? "line-through" : "none"}}>
                        {task.name}
                        <button name="remove" onClick={() => removeTask(task)}>Supprimer</button>
                        <input type="checkbox" checked={task.done} onChange={() => toggleTask(task)} />
                    </li>
                ))}
            </ul>
        </>
    )
}