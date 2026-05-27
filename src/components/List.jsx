import {Task} from "./Task";

export function List({tasks, filter, removeTask, toggleTask, updateTask}) {
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
                <Task
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                    updateTask={updateTask}
                    task={task}
                />
            ))}
        </ul>
    )
}
