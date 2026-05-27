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

    const filterTasks = (e) => {
        const selected = e.target.value
        if (!availableFilters.includes(selected)) return
        setTaskFilter(selected)
    }

    return (
        <div>
            <Filter
                availableFilters = {availableFilters}
                applyFilter = {filterTasks}
            />
            <Input
                onAddTask={addTask}
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