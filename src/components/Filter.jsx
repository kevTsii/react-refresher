import React from "react";

export const Filter = ({availableFilters, applyFilter}) => {
    return (
        <div>
            <select name="filter" id="tasks_filter" onChange={applyFilter}>
                {availableFilters.map((filter, index) => ( //index parce que la liste n'est jamais MaJ
                    <option key={index} value={filter}>
                        {filter}
                    </option>
                ))}
            </select>
        </div>
    )
}