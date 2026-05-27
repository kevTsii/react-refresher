export function List({tasks, filter, removeTask, toggleTask}) {
    const visibleTasks = filter === "all" ? tasks : filter === "active" ? tasks.filter(t => !t.done) : tasks.filter(t => t.done)
    return (
        <>
            <ul>
                { visibleTasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </>
    )
}