import React, { useContext } from 'react'
import { Context } from './MainContext'
import { Link } from 'react-router-dom';

export default function Cart() {

    const { cart, setCart } = useContext(Context);


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto flex flex-col md:flex-row gap-6">
                {/* Left Side - Cart Items */}
                <div className="w-full md:w-2/3 space-y-4">
                    {/* Single Cart Item */}
                    {
                        cart.length == 0
                            ?
                            <h1 className='text-center text-5xl'>Not Item Found</h1>
                            :
                            cart.map(
                                (cartData, cartIndex) => {
                                    return (
                                        <CartRow cartData={cartData} cartIndex={cartIndex} key={cartIndex} cart={cart} setCart={setCart} />
                                    )
                                }
                            )
                    }
                    {/* Repeat above block for multiple products */}
                </div>
                {/* Right Side - Product Summary */}
                <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
                    <h3 className="text-xl font-semibold mb-4">Summary</h3>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹999</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₹50</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹1049</span>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

function CartRow({ cartData, cartIndex, setCart, cart }) {

    const deleteCartRow = (index) => {

        const cartData = [...cart];
        cartData.splice(index, 1);

        setCart(cartData)
    }

    return (
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md border">
            <img
                src={cartData.thumbnail}
                alt="Product Image"
                className="w-24 h-24 object-cover rounded-md"
            />
            <div className="ml-4 flex-1">
                <Link to={`/productdetail/${cartData.id}`}>
                    <h2 className="text-lg font-semibold">{cartData.title}</h2>
                </Link>
                <p className="text-sm text-gray-500">Category: {cartData.category}</p>
                <p className="text-md font-medium mt-1">Price: ₹{cartData.price}</p>
                <div className="mt-2">
                    <label className="text-sm text-gray-700 mr-2">Quantity:</label>
                    <input
                        type="number"
                        defaultValue={cartData.qty}
                        min={1}
                        className="w-16 px-2 py-1 border rounded-md"
                    />
                </div>
            </div>
            <div>
                <button onClick={() => deleteCartRow(cartIndex)} className='py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg'>Remove</button>
            </div>
        </div>
    )
}
