import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    password: '',
  });
 // axios.defaults.withCredentials = true
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
     
      const response = await axios.post('http://localhost:5000/signup/login', formData);
      console.log(response.data);
      // Assuming successful login, navigate to homepage
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="rollNo" className="block text-gray-700">Roll Number</label>
              <input
                id="rollNo"
                name="rollNo"
                type="text"
                autoComplete="rollNo"
                required
                className="daisy-input w-full"
                placeholder="Enter your roll number"
                value={formData.rollNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="daisy-input w-full"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="daisy-btn daisy-btn-primary w-full"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
