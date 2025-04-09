import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products({ slug }) {

    const [allProducts, setAllProducts] = useState([])

    const getProducts = () => {

        let apiUrl = "https://dummyjson.com/products";

        if (slug != undefined) {
            apiUrl = `https://dummyjson.com/products/category/${slug}`
        }

        axios.get(apiUrl).then(
            (success) => {
                setAllProducts(success.data.products);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }


    useEffect(
        () => {
            getProducts();
        }, [slug]
    )

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
            {
                allProducts.map(
                    (product, index) => {
                        return (
                            <ProductCard key={index} product={product} />
                        )
                    }
                )
            }
        </div>

    )
}

function ProductCard({ product }) {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-lg border p-4 hover:shadow-xl transition-all">
            <img
                src={product.thumbnail}
                alt="Product Image"
                className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-lg text-green-600 font-bold">₹{product.price}</p>
                <p className="text-sm text-yellow-600">Rating: {product.rating}/5</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
                <p className="text-sm text-gray-500">Brand: {product.brand}</p>
                <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white'>Add to Card</button>
            </div>
        </div>
    )
}