"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { fetchCars } from "@utils";
import { fuels, gear, wheelDrive, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import { CarState } from "@types";
import DateTime from "@components/DateTime";
import { useGlobalContext } from "./Context/store";

export default function Home() {

  const {favArray, setFavArray} = useGlobalContext();


  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  // filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [drive, setDrive] = useState("");
  const [transmission, setTransmission] = useState("")

  // limit state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
        drive: drive || "",
        transmission: transmission || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model, drive, transmission]);

  const heartFillSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-7 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );

  const addFav=(svg: any)=>{
    if (favArray.some((carmodel: { model: string }) => carmodel.model === svg.model)) {
      alert("This car is already your Favourite, Check in favourite section!");
    } else {
      setFavArray([...favArray, svg]);
    }
   }

  return (
    <main className="overflow-hidden">
      <Hero />
      
      <div className=" mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManuFacturer={setManuFacturer} setModel={setModel} />
        </div>
        

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
          <CustomFilter title="drive" options={wheelDrive} setFilter={setDrive}/>
          <CustomFilter title="transmission" options={gear} setFilter={setTransmission}/>
          <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car,index) => (
                <CarCard key={index + 1} car={car} svg={heartFillSVG} func={addFav}/>
              ))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='./loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit  / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
