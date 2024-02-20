import React from 'react';

const FlightListCard = ({ data }) => {
  const { totalDuration, stopInfo, source, destination, airlines } =
    data?.displayData || {};
  return (
    <div className='mx-16 card shadow-xl bg-white my-2'>
      <div className='card-body'>
        <div className='grid grid-cols-7 gap-4'>
          <div className='text-xl font-bold'>{airlines?.[0].airlineName}</div>
          <div className='text-blue-600'>{stopInfo}</div>
          <div className='text-lg font-semibold flex flex-col'>
            <div>{source?.airport.cityName}</div>
            <div>{source?.depTime}</div>
          </div>
          <div className='text-xl flex flex-col items-center'>
            <div>{`------------->`}</div>
            <div>{totalDuration}</div>
          </div>
          <div className='text-lg font-semibold flex flex-col'>
            <div>{destination?.airport.cityName}</div>
            <div>{destination?.arrTime}</div>
          </div>
          <div className='font-bold'>{`$ ${data?.fare}`}</div>
          <button className='btn btn-primary w-full'>Select</button>
        </div>
      </div>
    </div>
  );
};

export default FlightListCard;
