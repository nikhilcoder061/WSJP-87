import React from 'react'

export default function Display({ allToDo, deleteList }) {

    const deleteToDo = (index) => {
        deleteList(index);
    }

    return (
        <div className="my-2 space-y-2  w-full">
            {
                allToDo.map(
                    (todo, index) => {
                        return (
                            <div key={index} className="flex justify-between items-center my-2 p-4 bg-gray-100 rounded-lg border">
                                <span>{todo}</span>
                                <button onClick={() => deleteToDo(index)} className="text-red-500">
                                    Delete
                                </button>
                            </div>
                        )
                    }
                )
            }
        </div>

    )
}
