# Todo List

A React mini-project to practice state management, props and component composition — a todo app with full CRUD operations.

## Features

- Add, edit, delete tasks
- Toggle tasks as complete / incomplete
- Filter by status: All, Active, Completed

## Concepts practiced

- `useState` — manage tasks list and active filter
- Props — pass callbacks down to child components
- Component composition — `Input`, `Filter`, `List`, `Task`

## Stack

- React

## Getting started

```bash
npm install
npm start
```

App available at [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── components/
│   ├── TodoList.jsx   # Main state and logic
│   ├── Input.jsx      # Add a task
│   ├── Filter.jsx     # All / Active / Completed tabs
│   ├── List.jsx       # Renders the filtered task list
│   └── Task.jsx       # Single task row (edit, toggle, delete)
└── App.js
```
