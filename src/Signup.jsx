import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [eye,setEye]=useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle signup logic (API call etc.)
    console.log('Signup data:', formData);
  };

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-white p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
    
                <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
         
          
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className='relative flex'>
            <label className="block text-gray-700">Password
            { 
            eye ? <input type="text" 
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="••••••••"
               className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
               required

            />
             : <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required/> 
            }

            </label>
      
            <span className='flex'><FaEye className='absolute bottom-3 right-1.5 sm:right-25 items-center' onClick={()=>setEye(!eye)} /></span>
          
  
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account? <NavLink to='/Loginpage'  className="text-black">  Log in</NavLink>
        </p>
      </div>
      <NavLink to='/' ><button className='rounded-2xl py-3 cursor-pointer px-4 bg-black text-white mt-7'> Back to Home page</button></NavLink>   
    </div>
  );
};

export default Signup;
