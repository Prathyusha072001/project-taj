import React, { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    table: '',
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tableBooking', JSON.stringify(formData));
    setBooked(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('https://assets.cntraveller.in/photos/67223218c3d220b6b329f8de/4:3/w_4964,h_3723,c_limit/Onrique%2012th%20Floor%20Night.jpg')` }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        {booked ? (
          <div className="bg-[radial-gradient(white,_rgb(235,185,127))] p-6 rounded-xl shadow-lg w-full  text-3xl max-w-xl text-center space-y-4">
            <h1 className="text-5xl font-bold text-gray-800">Booking Confirmed!</h1>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
            <p><strong>Table:</strong> {formData.table}</p>
            <button
              onClick={() => setBooked(false)}
              className="mt-4 bg-rose-700 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
            >
              Back
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[radial-gradient(white,_rgb(235,185,127))] p-6 rounded-xl shadow-lg w-full max-w-xl space-y-4"
          >
            <h1 className="text-4xl font-bold text-center text-gray-800">Book a Table</h1>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-3xl  p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
              className="w-full text-3xl p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full text-3xl p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full text-3xl p-3 border border-gray-300 rounded-lg"
            />

            <select
              name="table"
              value={formData.table}
              onChange={handleChange}
              required
              className="w-full text-3xl p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select a Table</option>
              {[...Array(13)].map((_, i) => (
                <option key={i + 1} value={`Table ${i + 1}`}>Table {i + 1}</option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-rose-700 text-3xl hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg w-full"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Book;
