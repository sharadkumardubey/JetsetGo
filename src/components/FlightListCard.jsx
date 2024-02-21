import React from "react";
import { formatTime } from "../utils/helper";

const FlightListCard = ({ data }) => {
  const { totalDuration, stopInfo, source, destination, airlines } =
    data?.displayData || {};
  return (
    <div className="mx-16 card shadow-xl bg-white my-2">
      <div className="card-body">
        <div className="grid grid-cols-7 gap-4">
          <div className="text-xl font-bold my-auto">
            {airlines?.[0].airlineName}
          </div>
          <div className="text-blue-600 my-auto">{stopInfo}</div>
          <div className="text-lg font-semibold flex flex-col">
            <div>{source?.airport.cityName}</div>
            <div>{formatTime(source?.depTime)}</div>
          </div>
          <div className="text-lg flex flex-col items-center">
            <div>{`---------->`}</div>
            <div className=" font-semibold text-gray-600">{totalDuration}</div>
          </div>
          <div className="text-lg font-semibold flex flex-col">
            <div>{destination?.airport.cityName}</div>
            <div>{formatTime(destination?.arrTime)}</div>
          </div>
          <div className="font-bold my-auto">{`$ ${data?.fare}`}</div>
          <button className="btn btn-primary w-full">Book</button>
        </div>
      </div>
    </div>
  );
};

export default FlightListCard;
