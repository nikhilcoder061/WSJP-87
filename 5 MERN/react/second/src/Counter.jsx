import React, { useState } from 'react'

export default function Counter({ price }) {

    const [count, setCount] = useState(1);
    // [stateName, stateModifire] = useState(defaultValue)

    const inc = () => {
        // count++ => count = count+1
        setCount(count + 1); // setCount(0+1)=> setCount(1)
    }

    const decs = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className='d-flex gap-4 justify-content-center my-5'>
                <button className='btn btn-primary' onClick={decs} disabled={count == 1 ? true : false}> - </button>
                <h1>{count}</h1>
                <h1 className={count >= 5 ? 'bg-danger' : ''}>{count * price}</h1>
                <button className='btn btn-primary' onClick={inc} disabled={count == 10 ? true : false}> + </button>
            </div>
        </>
    )
}
