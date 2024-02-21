import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlightListCard from './FlightListCard';
import { durationToMinutes } from '../utils/helper';

const sortData = (flightData, sortBy) => {
  if (sortBy === 'priceDesc') {
    return [...flightData].sort((a, b) => a.fare - b.fare);
  } else if (sortBy === 'durationAsc') {
    return [...flightData].sort(
      (a, b) =>
        durationToMinutes(a.displayData.totalDuration) -
        durationToMinutes(b.displayData.totalDuration)
    );
  } else {
    return flightData;
  }
};

const filterData = (flightData, queryParams, selectedFlight) => {
  return flightData.filter((flight) => {
    const { source, destination, date } = queryParams;
    return (
      flight.displayData.source.airport.cityName === source &&
      flight.displayData.destination.airport.cityName === destination &&
      flight.displayData.source.depTime.startsWith(date) &&
      flight.displayData.airlines[0].airlineName.startsWith(selectedFlight)
    );
  });
};

const flightListOptions = ['JetSpice', 'Air India'];

const Flights = () => {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({});
  const [flightList, setFlightList] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState('');
  const [sortBy, setSortBy] = useState('');

  const fetchFlights = async () => {
    try {
      const response = await fetch(
        'https://api.npoint.io/4829d4ab0e96bfab50e7'
      );
      const data = await response.json();
      setFlightList(data?.data?.result || []);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
    setQueryParams(params);
    if (Object.keys(params).length > 0) fetchFlights();
  }, [location.search]);

  const handleChangeSort = (e) => {
    if (e.target.value) setSortBy(e.target.value);
  };
  const handleFlightSelectChange = (e) => {
    setSelectedFlight(e.target.value);
  };

  const filteredFlights = useMemo(
    () => filterData(flightList, queryParams, selectedFlight),
    [flightList, queryParams, selectedFlight]
  );

  const sortedFlights = useMemo(
    () => sortData(filteredFlights, sortBy),
    [filteredFlights, sortBy]
  );

  return (
    <>
      {flightList.length > 0 && (
        <div className='mt-5 overflow-y-auto h-screen'>
          <label
            htmlFor='sortBy'
            className='border-2 border-sky-500 p-1 rounded-md w-56 block text-right mx-16 float-right bg-white'
          >
            <p className='my-1 font-semibold'>Sort By</p>
            <select
              name='sortBy'
              id='sortBy'
              onChange={handleChangeSort}
              className='w-full'
            >
              <option value=''>Select option</option>
              <option value='priceDesc'>Cheapest First</option>
              <option value='durationAsc'>Fastest First</option>
            </select>
          </label>
          <label
            htmlFor='flightSelect'
            className='border-2 border-sky-500 p-1 rounded-md w-56 block text-right mx-16 float-right bg-white'
          >
            <p className='my-1 font-semibold'>Select Flight</p>
            <select
              name='flightSelect'
              id='flightSelect'
              onChange={handleFlightSelectChange}
              className='w-full'
            >
              <option value=''>Select option</option>
              {flightListOptions.map((v) => (
                <option value={v} id={v}>
                  {v}
                </option>
              ))}
            </select>
          </label>
          <div className='w-full grid'>
            {sortedFlights.map((flight) => (
              <FlightListCard data={flight} key={flight.id} />
            ))}
            {sortedFlights.length === 0 && (
              <div className='text-center my-10 font-bold text-slate-950 drop-shadow-lg'>
                No Flights Found....
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Flights;
