import React from 'react'


export default function Home() {
    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to Home Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Welcome to MyWebsite</h2>
            <p className="text-gray-600 mb-4">
                We offer quality courses to boost your skills.
            </p>
            <a
                href="course.html"
                className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
            >
                Explore Courses
            </a>
        </>
    )
}
