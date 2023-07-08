import { useGlobalContext } from "@app/Context/store";
import Image from "next/image";
import React, { useState } from "react";

const DateTime = () => {

  const { addCart, setTotalDays, setTotalHours } = useGlobalContext();

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
      const totaldays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const totalhours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      );

      return {
        totaldays,
        totalhours,
        totalMinutes,
      };
    }

    return {
      totaldays: 0,
      totalhours: 0,
      totalMinutes: 0,
    };
  };

  const { totaldays, totalhours, totalMinutes } = calculateTotalDaysAndTime();
  setTotalDays(totaldays);
  setTotalHours(totalhours);
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-around">
      <div className=" flex justify-center items-center flex-col gap-5">
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
      </div>
      <div className=" space-y-3">
        <div className="md:ps-5 space-y-1">
          <h2 className="text-md flex gap-3 items-center font-semibold">
            <span>
              <Image src="/date.svg" width={15} height={15} alt="seat" />
            </span>{" "}
            Pick-up & Drop-off{" "}
          </h2>
          <p className="md:ps-10 text-sm">
            ({pickupDate}) at ({pickupTime}) -- to -- ({dropOffDate}) at (
            {dropOffTime})
          </p>
        </div>
        <div className="md:ps-5 space-y-1">
          <h2 className="text-md flex gap-3 items-center font-semibold">
            <span>
              <Image src="/time.svg" width={15} height={15} alt="seat" />
            </span>
            Time of operation
          </h2>
          <p className="md:ps-10 text-sm">Total days : {totaldays}</p>
          <p className="md:ps-10 text-sm">Total hours : {totalhours}</p>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
