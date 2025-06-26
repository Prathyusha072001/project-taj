import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/Login' : '/Signup';

    const payload = isLogin
      ? { Email: formData.Email, Password: formData.Password }
      : formData;

    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      alert(data.message);
      if (res.ok) navigate('/');
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${isLogin
          ? 'https://fabulouscalifornia.com/wp-content/uploads/sites/6/2022/12/qanda-restaurant-oceanside.jpg'
          : 'https://fabulouscalifornia.com/wp-content/uploads/sites/6/2022/12/qanda-restaurant-oceanside.jpg'}')`
      }}
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_rgb(240,216,234),_rgb(153,238,153))] p-10 rounded-xl w-full max-w-md text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-700">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>

        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-3xl mb-1">Full Name</label>
              <input
                type="text"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-2xl"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-3xl mb-1">Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-2xl"
              required
            />
          </div>

          <div>
            <label className="block text-3xl mb-1">Password</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-2xl"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-3xl mb-1">Confirm Password</label>
              <input
                type="password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-2xl"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-red-700 text-white text-3xl font-semibold px-6 py-2 rounded-md w-full hover:bg-red-800 transition"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>

          <div className="text-center text-2xl">
            {isLogin ? (
              <>
                <p className="mb-2 text-2xl">Don't have an account?</p>
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-blue-900  text-3xl underline"
                >
                  Signup Here
                </button>
              </>
            ) : (
              <>
                <p className="mb-2">Already have an account?</p>
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-blue-900 text-3xl underline"
                >
                  Login Here
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
