import React from "react";

export const Filter = ({availableFilters, currentFilter, applyFilter}) => {
    return (
        <div className="todo-filters">
            {availableFilters.map((filter, index) => ( //index parce que la liste n'est jamais MaJ
                <button
                    key={index}
                    className={`filter-btn ${currentFilter === filter ? "active" : ""}`}
                    onClick={() => applyFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}
