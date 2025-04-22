import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export const Context = createContext();

export default function MainContext({ children }) {

    const oldCartData = JSON.parse(localStorage.getItem("CART")) ?? [];
    const userToken = localStorage.getItem('token') ?? '';

    const [cart, setCart] = useState(oldCartData);
    const [user, setUser] = useState(userToken);

    useEffect(
        () => {
            localStorage.setItem("CART", JSON.stringify(cart));
        }, [cart]
    )

    useEffect(
        () => {
            localStorage.setItem('token', user);
        }, [user]
    )

    return (
        <>
            <Context.Provider value={{ cart, setCart, user, setUser }}>
                {children}
                <ToastContainer autoClose={1000} />
            </Context.Provider>
        </>
    )
}
