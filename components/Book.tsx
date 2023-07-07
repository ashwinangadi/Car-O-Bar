"use client";
import { useGlobalContext } from "@app/Context/store";
import { generateCarImageUrl } from "@utils";
import Image from "next/image";
import React from "react";

const Book = () => {
  const { addCart } = useGlobalContext();
  console.log(addCart)
  return (
    <div className="grid grid-cols-12 border padding-x padding-y max-width">
      <div className="col-start-1 col-end-9 grid grid-cols-3 border border-rose-500 p-5">
        {addCart?.map((item) => {
          return (
            <div className="space-y-2 col-start-1 col-end-3">
              <h1 className="text-2xl capitalize font-bold tracking-widest">{item.class}</h1>
              <p className="capitalize">{item.make} {item.model}</p>
              <div className="text-start grid grid-cols-2 ps-5 text-sm gap-x-20">
                <p>{item.city_mpg} - City mpg</p>
                <p>{item.highway_mpg} - Highway mpg</p>
                <p>{item.drive == "awd"? "All Wheel Drive": item.drive == "fwd" ? "Four Wheel Drive": item.drive == "rwd" ? "Rear Wheel Drive": "4 Wheel drive"}</p>
                <p>{item.transmission ==="a"?"Automatic":"Manual"}</p>
                <p className="capitalize">{item.fuel_type}</p>
                <p>{item.year} model</p>
              </div>
            </div>
          );
        })}
        {/* <Image
          src={generateCarImageUrl(addCart[0])}
          alt="car model"
          fill
          priority
          className="object-contain"
        /> */}
      </div>
      <div className="col-start-9 col-end-13 border border-rose-500 h-20">
        
      </div>
    </div>
  );
};

export default Book;
