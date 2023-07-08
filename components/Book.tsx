"use client";
import { useGlobalContext } from "@app/Context/store";
import { generateCarImageUrl } from "@utils";
import Image from "next/image";
import React from "react";
import DateTime from "./DateTime";
import CheckOut from "./CheckOut";

const Book = () => {
  const { addCart } = useGlobalContext();
  console.log("addcart", addCart);

  return (
    <>
      {addCart.length === 0 ? (
        <p className="padding-x padding-y max-width text-center text-6xl font-bold">
          Cart is empty
        </p>
      ) : (
        <section className="flex flex-col space-y-10 justify-center  lg:space-y-0 lg:grid lg:grid-cols-12  padding-y max-width p-2">
          <div className="col-start-1 col-end-9  p-5 me-2 rounded-xl shadow-lg">
            <div className="flex flex-col-reverse md:grid md:grid-cols-3">
              <div className="space-y-2 col-start-1 col-end-3">
                {addCart?.map((item) => {
                  return (
                    <>
                      <h1 className="text-2xl capitalize font-bold tracking-widest">
                        {item.class}
                      </h1>
                      <p className="capitalize font-semibold">
                        {item.make} {item.model}
                      </p>
                      <div className="text-start grid grid-cols-2 ps-5 text-sm md:gap-x-16">
                        <p className="flex gap-3">
                          <span>
                            <Image
                              src="/miles.svg"
                              width={15}
                              height={15}
                              alt="seat"
                            />
                          </span>{" "}
                          {item.city_mpg} - City mpg
                        </p>
                        <p className="flex gap-3">
                          <span>
                            <Image
                              src="/miles.svg"
                              width={15}
                              height={15}
                              alt="seat"
                            />
                          </span>{" "}
                          {item.highway_mpg} - Highway mpg
                        </p>
                        <p className="flex gap-3">
                          <span>
                            <Image
                              src="/tire.svg"
                              width={15}
                              height={15}
                              alt="seat"
                            />
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
                            <Image
                              src="/gas.svg"
                              width={15}
                              height={15}
                              alt="seat"
                            />
                          </span>{" "}
                          {item.fuel_type}
                        </p>
                        <p className="flex gap-3">
                          <span>
                            <Image
                              src="/year.svg"
                              width={15}
                              height={15}
                              alt="seat"
                            />
                          </span>{" "}
                          {item.year} model
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className=" relative  h-36  w-full md:col-start-3 md:col-end-4">
                <Image
                  src={generateCarImageUrl(addCart[0])}
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-5  border-t pt-5 space-y-3">
              <h1 className="font-bold text-lg">Select Date & Time</h1>
              <div className="flex gap-5">
                <DateTime />
              </div>
            </div>
          </div>

          <CheckOut/>
        </section>
      )}
    </>
  );
};

export default Book;
