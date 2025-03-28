import React from 'react'
import ProductItem from './ProductItem'
import { products } from './ProductList'


export default function Layout() {

    console.log(products);

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>
                        Product List
                    </h1>
                </div>
                <div className='row'>
                    {
                        products.map(
                            (productData, productIndex) => {
                                return (
                                    <ProductItem
                                        key={productIndex}
                                        brand={productData.brand}
                                        category={productData.category}
                                        title={productData.title}
                                        discount={productData.discountPercentage}
                                        price={productData.price}
                                        rating={productData.rating}
                                        image={productData.thumbnail}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
