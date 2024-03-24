import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    age: '',
    gender: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      navigate('/login');
      console.log(formData); 
      const response = await axios.post('http://localhost:5000/signup', formData);
      // Assuming the response includes a success message
      // Reset the form after successful registration
      setFormData({
        name: '',
        rollNumber: '',
        email: '',
        age: '',
        gender: '',
        password: '',
      });
    } catch (error) {
      console.error('Error registering student:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Sign up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="daisy-input w-full"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rollNumber" className="block text-gray-700">Roll Number</label>
            <input
              id="rollNumber"
              name="rollNumber"
              type="text"
              autoComplete="rollNumber"
              required
              className="daisy-input w-full"
              placeholder="Enter your roll number"
              value={formData.rollNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="daisy-input w-full"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-700">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              autoComplete="age"
              required
              className="daisy-input w-full"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              required
              className="daisy-select w-full"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="daisy-input w-full"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="daisy-btn daisy-btn-primary w-full"
          >
            Sign up
          </button>
          <Link to="/login" className="daisy-btn w-full bg-gray-200 hover:bg-gray-300">
            Go to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
