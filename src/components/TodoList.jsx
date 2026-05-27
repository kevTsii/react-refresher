import React, {useState} from "react";
import {Filter} from "./Filter";
import {Input} from "./Input";
import {List} from "./List";

export const TodoList = () => {
    const availableFilters = ["all", "active", "completed"]
    const [tasks, setTasks] = useState([])
    const [taskFilter, setTaskFilter] = useState("all")

    const addTask = (task) => {
        setTasks(prev => [...prev, task])
    }

    const removeTask = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id))
    }

    const toggleTask = (id) => {
        setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t))
    }

    return (
        <div className="todo-card">
            <h1>Ma Todo List</h1>
            <Input onAddTask={addTask} />
            <Filter
                availableFilters={availableFilters}
                currentFilter={taskFilter}
                applyFilter={setTaskFilter}
            />
            <List
                tasks={tasks}
                removeTask={removeTask}
                toggleTask={toggleTask}
                filter={taskFilter}
            />
        </div>
    );
}
