import React, {useState} from "react";
import {Filter} from "./Filter";
import {Input} from "./Input";
import {List} from "./List";

export const TodoList = () => {
    const availableFilters = ["all", "active", "completed"]
    const [tasks, setTasks] = useState([])
    const [taskFilter, setTaskFilter] = useState("all")

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    const toggleTask = (task) => {
        setTasks(tasks.map(t => t.id === task.id ? {...t, done: !t.done} : t))
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