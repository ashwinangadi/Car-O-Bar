import { Favourite } from "@components";
import { favArray } from "@components/CarCard";
import React from "react";

export default function Favourites() {
  return (
    <section className="">
      <div className="padding-x padding-y max-width">
        <Favourite favs={favArray} />
      </div>
      
    </section>
  );
}
