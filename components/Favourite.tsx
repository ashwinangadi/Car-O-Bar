"use client";

import React from "react";
import CarCard from "./CarCard";
// import { useGlobalContext } from "@app/Context/store";
import { useAppSelector } from "@redux/store";
import { removeFav } from "@redux/favCart/favArraySlice";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch } from "@redux/store";

const Favourite = () => {
  // const { favArray, setFavArray} = useGlobalContext();

  const dispatch = useDispatch<AppDispatch>();

  const favArray = useAppSelector(
    (state: any) => state.favArrayReducer.favArray
  );

  const removeFavs = (svg: any) => {
    if (
      favArray.some(
        (carmodel: { model: string }) => carmodel.model === svg.model
      )
    ) {
      const filtered = favArray.filter((carmodel: { model: string }) => {
        if (carmodel.model !== svg.model) return carmodel;
      });
      // console.log(filtered)
      dispatch(removeFav(svg));
    } else {
      alert("Object not found.");
    }
  };

  const isDataEmpty =
    !Array.isArray(favArray) || favArray.length < 1 || !favArray;

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
        strokeWidth="2"
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
            {favArray?.map((car) => (
              <CarCard car={car} svg={close} func={removeFavs} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">
            Oops, No favourite cars
          </h2>
        </div>
      )}
    </div>
  );
};

export default Favourite;
