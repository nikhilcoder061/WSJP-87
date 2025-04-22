import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { app } from './FirebaseConfig';

export default function Form() {

    const getUserData = (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            gender: event.target.gender.value
        }

        const db = getDatabase(app);
        const userId = uuidv4();
        set(ref(db, 'users/' + userId), newUser);
        event.target.reset();
    }


    return (
        <div className="container mt-5">
            <h2>Registration Form</h2>
            <form id="userForm" onSubmit={getUserData}>
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
                    <input type="email" className="form-control" id="email" required="" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input type="tel" className="form-control" id="phone" required="" name='phone' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            defaultValue="Male"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            defaultValue="Female"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>

    )
}
