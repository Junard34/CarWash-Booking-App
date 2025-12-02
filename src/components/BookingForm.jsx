import React, { useState } from 'react';

const BookingForm = ({ user, bookings, setBookings, services, closeForm }) => {
  const [data, setData] = useState({
    service: '',
    vehicle: '',
    plate: '',
    date: '',
    time: '',
    paymentMethod: '',
    amount: '',
    reference: ''
  });

  const handleBooking = () => {
    if (
      !data.service ||
      !data.vehicle ||
      !data.plate ||
      !data.date ||
      !data.time ||
      !data.paymentMethod ||
      !data.amount
    ) {
      return alert('Please fill all fields including payment.');
    }

    const serviceObj = services.find(s => s.name === data.service);

    setBookings([
      ...bookings,
      {
        id: bookings.length + 1,
        userId: user.id,
        userName: user.name,
        service: data.service,
        vehicle: data.vehicle,
        plate: data.plate,
        date: data.date,
        time: data.time,
        price: serviceObj.price,
        status: 'paid', // since paid on booking
        payment: {
          method: data.paymentMethod,
          amount: data.amount,
          reference: data.reference
        }
      }
    ]);

    closeForm();
  };

  return (
    <div className="bg-black text-white p-4 rounded shadow space-y-2">

      {/* Select Service */}
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

      {/* PAYMENT SECTION */}
      <h3 className="text-lg font-semibold mt-4">Payment Details</h3>

      <select
        value={data.paymentMethod}
        onChange={e => setData({ ...data, paymentMethod: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600"
      >
        <option value="GCash">GCash</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
      </select>

     <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="Amount Paid"
        value={data.amount}
        onChange={e => setData({ ...data, amount: e.target.value })}
        className="w-full p-2 rounded bg-black text-white border border-gray-600"
        />
        
      <button
        onClick={handleBooking}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Confirm Booking with Payment
      </button>
    </div>
  );
};

export default BookingForm;
