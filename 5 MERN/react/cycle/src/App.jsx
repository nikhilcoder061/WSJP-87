import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Products from './Products';

export default function App() {

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const inc = () => {
    setCount(count + 1);
  }
  const decs = () => {
    setCount(count - 1);
  }


  useEffect(
    () => {
      setPrice(count * 100);
    }, [count]
  )



  return (
    <>
      {/* <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
          <h1 class="text-2xl font-semibold text-gray-800">Counter</h1>

          <div class="flex items-center space-x-8">
            <button onClick={decs} class="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
              Decrease
            </button>

            <div class="text-3xl font-bold text-gray-700 mx-5">{count}</div>
            <div class="text-3xl font-bold text-gray-700 mx-5">{price}</div>

            <button onClick={inc} class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
              Increase
            </button>
          </div>
        </div>
      </div> */}
      <Products />
    </>

  )
}
