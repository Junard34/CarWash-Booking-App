import React, { useState } from 'react';

const BookingForm = ({ user, bookings, setBookings, services, closeForm }) => {
  const [data, setData] = useState({ service:'', vehicle:'', plate:'', date:'', time:'' });

  const handleBooking = () => {
    if(!data.service || !data.vehicle || !data.plate || !data.date || !data.time)
      return alert('Fill all fields');

    const serviceObj = services.find(s => s.name === data.service);

    setBookings([
      ...bookings,
      {
        id: bookings.length + 1,
        userId: user.id,
        userName: user.name,
        ...data,
        price: serviceObj.price,
        status: 'pending'
      }
    ]);

    closeForm();
  };

  return (
    <div className="bg-black text-white p-4 rounded shadow space-y-2">

      <select
        value={data.service}
        onChange={e => setData({ ...data, service: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600"
      >
        <option value="" className="bg-black">Select Service</option>
        {services.map(s => (
          <option key={s.id} value={s.name} className="bg-black">
            {s.name} - ₱{s.price}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Vehicle"
        value={data.vehicle}
        onChange={e => setData({ ...data, vehicle: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600"
      />

      <input
        type="text"
        placeholder="Plate Number"
        value={data.plate}
        onChange={e => setData({ ...data, plate: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600"
      />

      <input
        type="date"
        value={data.date}
        onChange={e => setData({ ...data, date: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600
              [&::-webkit-calendar-picker-indicator]:invert"
      />

      <input
        type="time"
        value={data.time}
        onChange={e => setData({ ...data, time: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600
             [&::-webkit-calendar-picker-indicator]:invert"
      />
      
      <button
        onClick={handleBooking}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;
