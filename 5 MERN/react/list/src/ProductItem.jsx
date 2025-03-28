import React from 'react'

export default function ProductItem({ brand, category, title, discount, price, rating, image }) {
    return (
        <div className="col-md-4 my-2">
            <div className="card">
                <img
                    src={image}
                    className="card-img-top"
                    alt="Product Image"
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <strong>Price:</strong> ${price} <br />
                        <strong>Discount:</strong> {discount}% <br />
                        <strong>Rating:</strong> {rating}/5 <br />
                        <strong>Brand:</strong> {brand} <br />
                        <strong>Category:</strong> {category}
                    </p>
                    <a href="#" className="btn btn-primary">
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>

    )
}
