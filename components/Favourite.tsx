"use client";
import { FavouriteProps } from "@types";
import React from "react";
import CarCard from "./CarCard";

const Favourite = ({ favs }: FavouriteProps) => {
  console.log(favs);
  const isDataEmpty = !Array.isArray(favs) || favs.length < 1 || !favs;

  const close = (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      strokeWidth={1}
      stroke="currentColor"
      className="w-7 h-10"
    >
      <path
        fill="none"
        stroke="#000000"
        stroke-width="2"
        d="M7,7 L17,17 M7,17 L17,7"
      ></path>
    </svg>
  );

  return (
    
      <div className="pt-20">
        <h1 className="hero__title text-center">Favourites</h1>
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-10">
              {favs?.map((car) => (
                <CarCard car={car} svg={close} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, No favourite cars</h2>
            <p>{favs?.message}</p>
          </div>
        )}{" "}
      </div>
    
  );
};

export default Favourite;
