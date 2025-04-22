import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../Pages/MainContext'

export default function Header() {

    const { cart, setCart, user, setUser } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(
        () => {
            if (!user && location.pathname != "/register") {
                navigate('/login');
            }
        }, [location.pathname]
    )

    const userLogout = () => {
        setUser('');
        navigate('/login');
    }


    return (
        <header className="bg-blue-600 text-white p-4 shadow sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyWebsite</h1>
                <nav className={`space-x-4 ${user ? 'block' : 'hidden'}`}>
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
                    <Link to={'/cart'}>
                        <button className='bg-orange-500 hover:bg-orange-600 p-2 px-3 rounded-lg'>Cart ({cart.length})</button>
                    </Link>
                    <button onClick={() => setCart([])} className='bg-gray-500 hover:bg-gray-600 p-2 px-3 rounded-lg'>Clear Cart</button>
                </nav>
                {
                    user
                        ?
                        <button onClick={userLogout} className='bg-gray-500 hover:bg-gray-600 p-2 px-3 rounded-lg'>Logout</button>
                        :
                        <button className='bg-green-500 hover:bg-green-600 p-2 px-3 rounded-lg'>Login</button>
                }
            </div>
        </header >

    )
}
