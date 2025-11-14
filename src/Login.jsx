import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: Add your login logic here
        console.log('Logging in with', email, password);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md  bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Login</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-black hover:bg-gray-700 text-white font-semibold rounded-xl transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Don’t have an account? <a href="/register" className="text-black hover:underline"> <NavLink to='/signup'>Signup here</NavLink> </a>
                </p>
            </div>

            <NavLink to="/" className="mt-5 bg-black px-4 py-3 text-white rounded-2xl scale-90 hover:scale-95" ><button >Back to Home page</button>
            </NavLink>
        </div>
    );
};

export default Login;
