import React from 'react'

export default function Input({ getValue }) {

    const addToDo = (event) => {
        if (event.key == "Enter") {
            getValue(event.target.value);
            event.target.value = "";
        }
    }

    return (
        <div className="flex items-center gap-2 p-4 bg-white shadow-lg rounded-xl w-full">
            <input
                onKeyUp={addToDo}
                type="text"
                placeholder="Enter your task..."
                className="flex-1 border border-gray-300 p-2 rounded-lg"
            />
        </div>
    )
}
