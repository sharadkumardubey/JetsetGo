import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlightListCard from './FlightListCard';

const Flights = () => {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({});
  const [flightList, setFlightList] = useState([]);

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
    // search flight list
    fetchFlights();
  }, [location.search]);

  console.log(flightList);

  if (Object.keys(queryParams).length <= 0 && flightList.length <= 0) {
    return <></>;
  } else {
    return (
      <div className='mt-10'>
        {flightList.map((flight) => {
          return <FlightListCard card={flight} key={flight.id} />;
        })}
      </div>
    );
  }
};

export default Flights;
