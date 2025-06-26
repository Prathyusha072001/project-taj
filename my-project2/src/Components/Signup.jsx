import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2023/10/beacon_restaurants-2.jpg')` }}
    >
      <div className="flex flex-col items-center p-6">
        <form className="w-full max-w-md p-8 rounded-xl shadow-md bg-[radial-gradient(ellipse_at_center,_rgb(240,216,234),_rgb(90,218,10))] space-y-6">
          <h2 className="text-5xl font-bold text-blue-900 text-center">Sign Up</h2>

          <div>
            <label className="block text-4xl mb-1">FullName</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md text-3xl"
            />
          </div>

          <div>
            <label className="block text-4xl mb-1">Email </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md text-3xl"
            />
          </div>

          <div>
            <label className="block text-4xl mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md text-3xl"
            />
          </div>
          <div>
            <label className="block text-4xl mb-1"> ConfirmPassword</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md text-3xl"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold text-4xl px-6 py-2 rounded-md"
            >
              <Link to="/" className="text-white no-underline block">Signup</Link>
            </button>
          </div>

          <p className="text-center text-3xl">Already have an account?</p>
          <Link to="/Login" className="text-blue-800 underline text-4xl block text-center">Login.</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
