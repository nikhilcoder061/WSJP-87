import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Layout() {

    const [userData, setUserData] = useState([{ name: 'wscube', 'email': 'ws@gmail.com', phone: '749635' }]);

    const addUser = (event) => {
        event.preventDefault();

        const data = [...userData];

        const obj = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value
        }

        data.push(obj);

        setUserData(data);
        event.target.reset();

    }




    return (
        <div className="container mt-5">
            <div className="row gap-5">
                {/* Left Side Form */}
                <div className="col-md-3 shadow p-4 border">
                    <h4>Enter Details</h4>
                    <form id="userForm" onSubmit={addUser}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="name" required="" name='name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="email" required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input type="text" className="form-control" id="phone" required="" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                {/* Right Side Table */}
                <div className="col-md-8 shadow p-4 border">
                    <h4>Users Table</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="userTableBody">
                            {
                                userData.map(
                                    (user, index) => {
                                        return (
                                            <UserListItem user={user} userData={userData} key={index} index={index} setUserData={setUserData} />
                                        )
                                    }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function UserListItem({ user, userData, index, setUserData }) {

    const deleteUser = (index) => {
        const data = [...userData];
        data.splice(index, 1);
        setUserData(data);
    }
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <FaCheckCircle />
                <RxCross2 />
                {/* <button className='btn btn-primary'>Active</button> */}
            </td>
            <td>
                <button onClick={() => deleteUser(index)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}