export function List({tasks, filter, removeTask, toggleTask}) {
    const filterMap = {
        all: tasks,
        active: tasks.filter(t => !t.done),
        completed: tasks.filter(t => t.done)
    }
    const visibleTasks = filterMap[filter] ?? tasks

    if (visibleTasks.length === 0) {
        return <p className="todo-empty">Aucune tâche à afficher.</p>
    }

    return (
        <ul className="todo-list">
            {visibleTasks.map(task => (
                <li key={task.id} className={`todo-item ${task.done ? "done" : ""}`}>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span className="todo-item-name">{task.name}</span>
                    <button className="btn-remove" onClick={() => removeTask(task.id)}>
                        Supprimer
                    </button>
                </li>
            ))}
        </ul>
    )
}
