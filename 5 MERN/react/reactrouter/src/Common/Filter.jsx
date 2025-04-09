import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter() {

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

    useEffect(
        () => {
            getCategories();
        }, []
    )

    return (
        <div>
            <div className='m-3'>
                <h1 className='text-2xl'>Filter by Category</h1>
                <div>
                    <div className='border rounded-lg my-2 px-4 py-2 cursor-pointer bg-blue-500 text-white'>All Categories</div>
                    {
                        allCategories.map(
                            (data, index) => {
                                return (
                                    <Link to={`/shop/${data.slug}`}>
                                        <div key={index} className='border rounded-lg my-2 px-4 py-2 cursor-pointer'>{data.name}</div>
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
