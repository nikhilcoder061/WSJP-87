import React from 'react'

export default function Input({ getSearchName }) {

    const searchMovie = (event) => {
        getSearchName(event.target.value);
    }

    return (
        <div className="mb-6" >
            <input
                type="text"
                placeholder="Search Movie"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyUp={searchMovie}
            />
        </div>
    )
}
