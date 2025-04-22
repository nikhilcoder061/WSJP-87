import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

export default function Table() {

    const [allUserData, setAllUserData] = useState([]);

    const getFireBaseData = () => {
        const db = getDatabase();
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const result = Object.entries(data).map(([key, value]) => ({
                id: key,
                ...value
            }));
            setAllUserData(result);
        });
    }

    useEffect(
        () => {
            getFireBaseData();
        }, []
    )


    return (
        <div className="container mt-5">
            <h3>Submitted Data</h3>
            <table className="table table-bordered" id="dataTable">
                <thead className="table-dark">
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUserData.map(
                            (user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.gender}</td>
                                        <td><button className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}
