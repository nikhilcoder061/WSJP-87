import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Pages/MainContext'

export default function Header() {

    const { cart, setCart } = useContext(Context);

    return (
        <header className="bg-blue-600 text-white p-4 shadow sticky top-0">
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
                    <button className='bg-orange-500 hover:bg-orange-600 p-2 px-3 rounded-lg'>Cart ({cart})</button>
                    <button onClick={() => setCart(0)} className='bg-gray-500 hover:bg-gray-600 p-2 px-3 rounded-lg'>Clear Cart</button>
                </nav>
            </div>
        </header>

    )
}
