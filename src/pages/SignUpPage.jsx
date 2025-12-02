import React, { useState } from 'react';

const SignUpPage = ({ users, setUsers, goLogin }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', phone: ''
  });
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      setError('Fill all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (users.find(u => u.email === formData.email)) {
      setError('Email already exists');
      return;
    }

    const newUser = { ...formData, id: users.length + 1 };
    setUsers([...users, newUser]);
    alert('Account created! You can now login.');
    goLogin();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">

      {/* Background shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-gray-700 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-gray-800 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-40 h-40 bg-gray-600 rounded-full filter blur-2xl opacity-20 animate-ping"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-gray-500 rounded-full filter blur-2xl opacity-20 animate-ping"></div>

      {/* Signup Card */}
      <div className="relative z-10 bg-gray-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>

        <input
          placeholder="Full Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="w-full mb-3 px-4 py-3 border border-gray-600 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        />

        <input
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="w-full mb-3 px-4 py-3 border border-gray-600 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        />

        <input
          placeholder="Phone"
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          className="w-full mb-3 px-4 py-3 border border-gray-600 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          className="w-full mb-3 px-4 py-3 border border-gray-600 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
          className="w-full mb-3 px-4 py-3 border border-gray-600 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        />

        {error && <p className="text-red-500 mb-3 text-center font-medium">{error}</p>}

        <button
          onClick={handleSignUp}
          className="w-full bg-gray-700 text-white py-3 rounded-2xl shadow-xl font-semibold hover:scale-105 transform transition-all mb-4"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-300">
          Already have an account?{' '}
          <button onClick={goLogin} className="text-gray-400 font-semibold hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
