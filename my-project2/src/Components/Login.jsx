import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://fabulouscalifornia.com/wp-content/uploads/sites/6/2022/12/qanda-restaurant-oceanside.jpg')` }}>
      <div className="bg-[radial-gradient(rgb(240,216,234),_rgb(153,238,153))] p-10 rounded-xl w-full max-w-md text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-600">Login</h1>

        <form className="space-y-6">
          <div className="text-left">
            <label className="block text-4xl mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-3xl"
            />
          </div>

          <div className="text-left">
            <label className="block text-4xl mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-3xl"
            />
          </div>

          <div>
            <button type="submit" className="bg-red-700 text-white text-4xl font-semibold px-6 py-2 rounded-md w-full hover:bg-red-800 transition mb-6">
              <Link to="/" className="text-white no-underline block">Login</Link>
            </button>
          </div>

          <div className="text-2xl">
            <p className="text-3xl mb-4">Don't have an account?</p>
            <Link to="/Signup" className="text-blue-700 underline text-4xl">Signup.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
