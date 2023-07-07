import React, { useState } from "react";

const DateTime = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const handlePickupDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPickupDate(event.target.value);
  };

  const handlePickupTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPickupTime(event.target.value);
  };

  const handleDropOffDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDropOffDate(event.target.value);
  };

  const handleDropOffTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDropOffTime(event.target.value);
  };

  const calculateTotalDaysAndTime = () => {
    if (pickupDate && pickupTime && dropOffDate && dropOffTime) {
      const pickupDateTime: any = new Date(`${pickupDate} ${pickupTime}`);
      const dropOffDateTime: any = new Date(`${dropOffDate} ${dropOffTime}`);

      const timeDiff = dropOffDateTime - pickupDateTime;
      const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      );
      

      return {
        totalDays,
        totalHours,
        totalMinutes,
       
      };
    }

    return {
      totalDays: 0,
      totalHours: 0,
      totalMinutes: 0,
      
    };
  };

  const { totalDays, totalHours, totalMinutes } =
    calculateTotalDaysAndTime();

  return (
    <div className="mt-5 flex justify-center items-center flex-wrap gap-5">
      <div className="flex flex-col gap-1 border border-gray-300 px-2 py-2 rounded-xl">
        <label className="text-sm text-center font-semibold">
          Pick-up Date & Time
        </label>
        <div className="flex gap-2">
          <div className="flex flex-col justify-center items-center">
            <input
              type="date"
              className="border rounded-lg border-gray-400 p-px"
              value={pickupDate}
              onChange={handlePickupDateChange}
            />
          </div>
          <div className="border" />
          <div className="flex flex-col justify-center items-center">
            <input
              type="time"
              className="border rounded-lg border-gray-400 p-px"
              value={pickupTime}
              onChange={handlePickupTimeChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 border border-gray-300 px-2 py-2 rounded-xl">
        <label className="text-sm text-center font-semibold">
          Drop-off Date & Time
        </label>
        <div className="flex gap-2">
          <div className="flex flex-col justify-center items-center">
            <input
              className="border rounded-lg border-gray-400 p-px"
              type="date"
              value={dropOffDate}
              onChange={handleDropOffDateChange}
            />
          </div>
          <div className="border" />
          <div className="flex flex-col justify-center items-center">
            <input
              className="border rounded-lg border-gray-400 p-px"
              type="time"
              value={dropOffTime}
              onChange={handleDropOffTimeChange}
            />
          </div>
        </div>
      </div>

      {/* <div>
        <p>Total Days: {totalDays}</p>
        <p>
          Total hours: {totalHours} hours {totalMinutes} minutes
        </p>
        <p>
          Total Time: {totalTime} hours {totalMinutes} minutes
        </p>
      </div> */}
    </div>
  );
};

export default DateTime;
