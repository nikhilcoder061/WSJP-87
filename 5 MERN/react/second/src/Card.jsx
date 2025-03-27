import React from 'react'

export default function Card({ name, email, age, img }) {

    return (
        <div className="card" style={{ width: "17rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">
                    Email:{email}
                </p>
                <p className="card-text">
                    Age: {age}
                </p>
            </div>
        </div>
    )
}
