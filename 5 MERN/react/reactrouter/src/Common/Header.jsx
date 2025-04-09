import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyWebsite</h1>
                <nav className="space-x-4">
                    <Link to={'/'}>
                        Home
                    </Link>
                    <Link to={'/about'}>
                        About
                    </Link>
                    <Link to={'/course'}>
                        Course
                    </Link>
                    <Link to={'/contact'}>
                        Contact
                    </Link>
                    <Link to={'/shop'}>
                        Shop
                    </Link>
                </nav>
            </div>
        </header>

    )
}
