import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import { Context } from './MainContext';
import { GoogleAuthProvider } from "firebase/auth";

export default function Login() {

    const { user, setUser } = useContext(Context);
    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user.accessToken);
                toast.success("User login successfully");
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                toast.error("User not found");
            });
    }

    const loginWithGoogle = () => {
        console.log('hello everyon');
        const provider = new GoogleAuthProvider();

        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                setUser(user.accessToken);
                toast.success("User login successfully");
                navigate('/');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }


    return (
        <div className='bg-gray-100 flex items-center justify-center py-10 '>
            <div className="bg-white p-8 rounded shadow-md border w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>

                    <button
                        onClick={loginWithGoogle}
                        type="button"
                        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
                    >
                        Login with Google
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?
                    <Link to={'/register'}>
                        <span className="text-blue-500 hover:underline">
                            Register
                        </span>
                    </Link>
                </p>
            </div>

        </div>
    )
}
