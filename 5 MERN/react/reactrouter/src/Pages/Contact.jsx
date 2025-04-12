import React, { useContext } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Contact() {

    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to Contact Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form className="grid gap-4 max-w-xl">
                <input type="text" placeholder="Your Name" className="border p-2 rounded" />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border p-2 rounded"
                />
                <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="border p-2 rounded"
                    defaultValue={""}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </>
    )
}
