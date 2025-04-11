import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

    const [productDetail, setProductDetail] = useState({});

    const { productId } = useParams();

    const getProductDetail = () => {
        axios.get(`https://dummyjson.com/products/${productId}`).then(
            (success) => {
                setProductDetail(success.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
    console.log(productDetail);

    useEffect(
        () => {
            getProductDetail();
        }, []
    )


    return (
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Left Side - Images */}
                <div>
                    <img
                        src={productDetail.thumbnail}
                        alt="Main Image"
                        className="w-full rounded-xl object-cover"
                    />
                    <div className="flex space-x-4 mt-4">
                        {
                            productDetail?.images?.map(
                                (imageData, imageIndex) => {
                                    return (
                                        <img
                                            src={imageData}
                                            className="w-20 h-20 object-cover rounded cursor-pointer border-2 border-gray-200 hover:border-blue-500"
                                        />
                                    )
                                }
                            )
                        }

                    </div>
                </div>
                {/* Right Side - Product Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{productDetail?.title}</h1>
                    <p className="text-xl text-green-600 font-semibold mb-2">${productDetail.price}</p>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">{productDetail.rating}/5</div>
                    </div>
                    <p className="text-gray-700 mb-6">
                        {productDetail.description}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                        Add to Cart
                    </button>
                </div>
            </div>
            {/* Reviews Section */}
            <div className="border-t px-6 py-4">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    {
                        productDetail?.reviews?.map(
                            (review) => {
                                return (
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between">
                                            <h4 className="font-bold">{review.reviewerName}</h4>
                                            <span className="text-yellow-400">{review.rating}/5</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            {review.comment}
                                        </p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>

    )
}
