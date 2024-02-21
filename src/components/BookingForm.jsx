import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cityNamesSource = ['Delhi', 'Mumbai'];
const cityNamesDestination = ['Mumbai', 'Chennai'];
const travellerList = ['1 Person', '2 Person', '3 Person', '4 Person'];

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
    traveller: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    navigate(`jetsetgo/?${queryParams}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = Object.values(formData).every((value) => value);

  return (
    <div className='card mx-16 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Search Where You want to go</h2>
        <form
          className='flex justify-between items-center'
          onSubmit={handleSubmit}
        >
          <label
            htmlFor='source'
            className='w-full flex flex-col border-2 border-sky-500 p-1 rounded-md m-1'
          >
            <p className='my-1 font-semibold'>Source</p>
            <select name='source' id='source' onChange={handleChange}>
              <option value=''>Select Source</option>
              {cityNamesSource
                .filter((v) => v !== formData.destination)
                .map((name) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
            </select>
          </label>
          <label
            htmlFor='destination'
            className='w-full flex flex-col border-2 border-sky-500 p-1 rounded-md m-1'
          >
            <p className='my-1 font-semibold'>Destination</p>
            <select name='destination' id='destination' onChange={handleChange}>
              <option value=''>Select Destination</option>
              {cityNamesDestination
                .filter((v) => v !== formData.source)
                .map((name) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
            </select>
          </label>
          <label
            htmlFor='date'
            className='w-full flex flex-col border-2 border-sky-500 p-1 rounded-md m-1'
          >
            <p className='my-1 font-semibold'>Date</p>
            <input
              className='input h-6'
              name='date'
              id='date'
              type='date'
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor='traveller'
            className='w-full flex flex-col border-2 border-sky-500 p-1 rounded-md m-1'
          >
            <p className='my-1 font-semibold'>Traveller</p>
            <select name='traveller' id='traveller' onChange={handleChange}>
              <option value=''>Select Traveller</option>
              {travellerList.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <button
            className='btn w-40 bg-sky-500 hover:bg-sky-600 font-bold'
            type='submit'
            disabled={!isFormValid}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
