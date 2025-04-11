import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter({ slug, setRating, rating, price, setPrice }) {

    const [allCategories, setAllCategories] = useState([]);


    const getCategories = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (success) => {
                setAllCategories(success.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    const fromPrice = (event) => {
        if (event.target.value >= 0) {
            setPrice({ ...price, from: event.target.value });
        }
    }

    const toPrice = (event) => {
        if (event.target.value >= 0) {
            setPrice({ ...price, to: event.target.value });
        }
    }

    useEffect(
        () => {
            getCategories();
        }, []
    )

    return (
        <div>
            <div className='m-3 border-b my-5'>
                <h1 className='text-2xl'>Filter by Rating</h1>
                <div>
                    <div onClick={() => setRating(4)} className={`p-2 my-2 p border rounded-lg cursor-pointer ${rating == 4 ? 'bg-blue-500 text-white' : ''} `}>4 ⭐ & Above</div>
                    <div onClick={() => setRating(3)} className={`p-2 my-2 p border rounded-lg cursor-pointer ${rating == 3 ? 'bg-blue-500 text-white' : ''} `}>3 ⭐ & Above</div>
                    <div onClick={() => setRating(2)} className={`p-2 my-2 p border rounded-lg cursor-pointer ${rating == 2 ? 'bg-blue-500 text-white' : ''} `}>2 ⭐ & Above</div>
                    <div onClick={() => setRating(1)} className={`p-2 my-2 p border rounded-lg cursor-pointer ${rating == 1 ? 'bg-blue-500 text-white' : ''} `}>1 ⭐ & Above</div>
                </div>
            </div>
            <div className='m-3 border-b my-5 py-4'>
                <h1 className='text-2xl'>Filter by Price</h1>
                <div className='flex justify-between items-center'>
                    <input onChange={fromPrice} type="number" placeholder='from' className='w-20 border p-2' value={price.from} />
                    to
                    <input onChange={toPrice} type="number" placeholder='to' className='w-20 border p-2' value={price.to} />
                </div>
            </div>
            <div className='m-3 border-b my-5'>
                <h1 className='text-2xl'>Filter by Category</h1>
                <div>
                    <Link to={'/shop'}>
                        <div className={`border rounded-lg my-2 px-4 py-2 cursor-pointer ${slug == undefined ? 'bg-blue-500 text-white' : ''} `}>All Categories</div>
                    </Link>
                    {
                        allCategories.map(
                            (data, index) => {
                                return (
                                    <Link to={`/shop/${data.slug}`}>
                                        <div key={index} className={`border rounded-lg my-2 px-4 py-2 cursor-pointer 
                                            ${slug == data.slug ? 'bg-blue-500 text-white' : ''}`}>{data.name}</div>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
