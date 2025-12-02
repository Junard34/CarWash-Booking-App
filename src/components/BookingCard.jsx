import React from 'react';
import StatusBadge from './StatusBadge';

const BookingCard = ({ booking, setBookings }) => {
  const cancelBooking = () => {
    setBookings(prev => prev.filter(b => b.id !== booking.id));
  };

  return (
    <div className="bg-black text-white p-4 rounded shadow">
      <h3 className="font-semibold">{booking.service}</h3>
      <p>{booking.vehicle} • {booking.plate}</p>
      <p>📅 {booking.date} 🕐 {booking.time}</p>
      <p className="text-blue-400 font-bold">₱{booking.price}</p>

      <StatusBadge status={booking.status} />

      <button
        onClick={cancelBooking}
        className="mt-2 bg-red-100 text-red-700 px-3 py-1 rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default BookingCard;
