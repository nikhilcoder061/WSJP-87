import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Course() {
    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to Course Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-4 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-lg font-bold">Web Development</h3>
                    <p className="text-gray-600">HTML, CSS, JavaScript, React &amp; more.</p>
                </div>
                <div className="border p-4 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-lg font-bold">Backend with Node.js</h3>
                    <p className="text-gray-600">Node, Express, MongoDB.</p>
                </div>
                <div className="border p-4 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-lg font-bold">Full Stack MERN</h3>
                    <p className="text-gray-600">End-to-end MERN stack development.</p>
                </div>
            </div>
        </>
    )
}
