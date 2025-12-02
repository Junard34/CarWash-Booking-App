import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashBoardPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', phone: '09123456789' }
  ]);

  const [bookings, setBookings] = useState([
    { id: 1, userId: 1, userName: 'John Doe', service: 'Premium Wash', vehicle: 'Toyota Corolla', plate: 'ABC 1234', date: '2024-11-25', time: '10:00 AM', status: 'confirmed', price: 500 },
    { id: 2, userId: 1, userName: 'John Doe', service: 'Basic Wash', vehicle: 'Honda Civic', plate: 'XYZ 5678', date: '2024-11-26', time: '2:00 PM', status: 'pending', price: 250 }
  ]);

  const services = [
    { id: 1, name: 'Basic Wash', description: 'Exterior wash and dry', price: 250, duration: '30 mins', icon: '🚗' },
    { id: 2, name: 'Premium Wash', description: 'Exterior, interior cleaning, and wax', price: 500, duration: '1 hour', icon: '✨' },
    { id: 3, name: 'Deluxe Package', description: 'Full service with detailing', price: 800, duration: '2 hours', icon: '💎' },
    { id: 4, name: 'Engine Wash', description: 'Engine bay cleaning', price: 300, duration: '45 mins', icon: '🔧' }
  ];

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  return (
    <div className="app-container">
      {currentPage === 'login' && (
        <LoginPage users={users} onLogin={handleLogin} goSignUp={() => setCurrentPage('signup')} />
      )}

      {currentPage === 'signup' && (
        <SignUpPage users={users} setUsers={setUsers} goLogin={() => setCurrentPage('login')} />
      )}

      {currentPage === 'dashboard' && currentUser && (
        <DashboardPage
          user={currentUser}
          bookings={bookings}
          setBookings={setBookings}
          services={services}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default App;
