import React, { useEffect, useState } from 'react'

export default function Products() {

    const [allProducts, setAllProducts] = useState([])

    const getData = async () => {
        const data = await fetch('https://dummyjson.com/recipes');
        const finalData = await data.json();
        setAllProducts(finalData.recipes);
    }
    
    console.log(allProducts);

    useEffect(
        () => {
            getData();
        }, []
    )


    return (
        <div>
            {
                allProducts.map(
                    (data,index) => {
                        return (
                            <ProductCard data={data} key={index}/>
                        )
                    }
                )
            }

        </div>
    )
}

function ProductCard({data}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                    src={data.image}
                    alt="Product Image"
                    className="w-full h-48 object-cover"
                />
                <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800">Product Title</h2>
                    <p className="text-gray-600 mt-2 text-sm">
                        This is a short description of the product. It's clean and simple.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-green-600">$49.99</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
