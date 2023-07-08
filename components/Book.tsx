"use client";
import { useGlobalContext } from "@app/Context/store";
import { generateCarImageUrl } from "@utils";
import Image from "next/image";
import React from "react";
import DateTime from "./DateTime";

const Book = () => {
  const {
    addCart,
    pickupDate,
    pickupTime,
    dropOffDate,
    dropOffTime,
    totalDays,
    totalHours,
    totalMinutes,
  } = useGlobalContext();
  console.log("addcart", addCart);
  const car = addCart[0];
  console.log(car);
  return (
    <section className="grid grid-cols-12 border padding-x padding-y max-width ">
      <div className="col-start-1 col-end-9 grid grid-cols-3 border border-rose-500 p-5 me-2 rounded-xl shadow-xl">
        {addCart?.map((item) => {
          return (
            <div className="space-y-2 col-start-1 col-end-3">
              <h1 className="text-2xl capitalize font-bold tracking-widest">
                {item.class}
              </h1>
              <p className="capitalize font-semibold">
                {item.make} {item.model}
              </p>
              <div className="text-start grid grid-cols-2 ps-5 text-sm gap-x-16">
                <p className="flex gap-3">
                  <span>
                    <Image src="/miles.svg" width={15} height={15} alt="seat" />
                  </span>{" "}
                  {item.city_mpg} - City mpg
                </p>
                <p className="flex gap-3">
                  <span>
                    <Image src="/miles.svg" width={15} height={15} alt="seat" />
                  </span>{" "}
                  {item.highway_mpg} - Highway mpg
                </p>
                <p className="flex gap-3">
                  <span>
                    <Image src="/tire.svg" width={15} height={15} alt="seat" />
                  </span>
                  {item.drive == "awd"
                    ? "All Wheel Drive"
                    : item.drive == "fwd"
                    ? "Four Wheel Drive"
                    : item.drive == "rwd"
                    ? "Rear Wheel Drive"
                    : "4 Wheel drive"}
                </p>
                <p className="flex gap-3">
                  <span>
                    <Image
                      src="/steering-wheel.svg"
                      width={15}
                      height={15}
                      alt="seat"
                    />
                  </span>{" "}
                  {item.transmission === "a" ? "Automatic" : "Manual"}
                </p>
                <p className="capitalize flex gap-3">
                  <span>
                    <Image src="/gas.svg" width={15} height={15} alt="seat" />
                  </span>{" "}
                  {item.fuel_type}
                </p>
                <p className="flex gap-3">
                  <span>
                    <Image src="/year.svg" width={15} height={15} alt="seat" />
                  </span>{" "}
                  {item.year} model
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex-1 relative w-full">
          <Image
            src={generateCarImageUrl(car)}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="mt-5 col-start-1 col-end-4 border-t pt-5 space-y-3">
          <h1 className="font-bold text-lg">Car rental Details</h1>

          <div className="flex gap-5">
            <DateTime />

            <div className=" space-y-3">
              <div className="ps-5 space-y-1">
                <h2 className="text-md flex gap-3 items-center font-semibold">
                  <span>
                    <Image src="/date.svg" width={15} height={15} alt="seat" />
                  </span>{" "}
                  Pick-up & Drop-off{" "}
                </h2>
                <p className="ps-10 text-sm">
                  ({pickupDate}) at ({pickupTime}) -- to -- ({dropOffDate}) at (
                  {dropOffTime})
                </p>
              </div>
              <div className="ps-5 space-y-1">
                <h2 className="text-md flex gap-3 items-center font-semibold">
                  <span>
                    <Image src="/time.svg" width={15} height={15} alt="seat" />
                  </span>
                  Time of operation
                </h2>
                <p className="ps-10 text-sm">Total days : {totalDays}</p>
                <p className="ps-10 text-sm">Total hours : {totalHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-start-9 col-end-13 border border-rose-500 h-20 rounded-xl"></div>
    </section>
  );
};

export default Book;
