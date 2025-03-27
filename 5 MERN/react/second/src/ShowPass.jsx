import React, { useState } from 'react'

export default function ShowPass() {

    const [pass, setPass] = useState(true);

    const changePass = () => {
        setPass(!pass);
    }

    return (
        <div className='d-flex gap-2 m-5'>
            <input type={pass == true ? 'password' : 'text'} />
            <button onClick={changePass}>Show Password</button>
        </div>
    )
}
