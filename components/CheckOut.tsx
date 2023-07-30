// import { useGlobalContext } from "@app/Context/store";
import { CustomButton } from "@components";
import { useAppSelector } from "@redux/store";
import { calculateCarRent } from "@utils";

import React, { useState } from "react";

import getStripePromise from "@app/lib/stripe";

const CheckOut = () => {

  // const { addCart } = useGlobalContext();
  const addCart = useAppSelector((state: any) => state.addCartReducer.cart);
  const totalDays = useAppSelector((state: any) => state.totalDaysReducer.days);
  const totalHours = useAppSelector(
    (state: any) => state.totalHoursReducer.hours
  );

  // const [days, setDays] = useState(0)
  let carRent;
  if (addCart.length > 0) {
    carRent = calculateCarRent(addCart[0].city_mpg, addCart[0].year);
  }

  const days: number = totalHours > 0 ? totalDays + 1 : totalDays;
  console.log("tDays", days);
  //   tDays > 0 && setDays(tDays)
  const totalPrice = days * Number(carRent);
  console.log("totalPrice", totalPrice);

  //handling stripe payment
  
  const handleClick = async () => {
    if (totalPrice <= 0) {
      alert("Select date and time for pick-up and drop-off");
    } else {
      const products = [
        {
          product: 1,
          name: `${addCart[0].make} ${addCart[0].model}`,
          price: `${totalPrice}`,
          quantity: 1,
        },
      ];
      const stripe = await getStripePromise();
      const response = await fetch("api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(products),
      });
      const data = await response.json();
      if(data.session){
        stripe?.redirectToCheckout({sessionId: data.session.id})
      }
    }
  };

  return (
    <div className="col-start-9 col-end-13 rounded-xl space-y-3">
      <div className="shadow-md p-2 rounded-xl space-y-2">
        <p className="flex text-[32px] leading-[38px] font-extrabold">
          <span className="self-start text-[14px] leading-[17px] font-semibold">
            $
          </span>
          {carRent}
          <span className="self-end text-[14px] leading-[17px] font-medium">
            /day
          </span>
        </p>
        <p className="text-sm text-green-600">Free cancellation</p>
        <p className="text-sm">Pay now pick-up later</p>
      </div>
      <div className="shadow-xl p-2 rounded-xl space-y-3">
        <p className="font-bold">Price details</p>
        <p className="text-sm">Pay now pick-up later</p>
        <div>
          <p className="text-sm flex justify-between">
            Car rental fee x {days} days <span>${totalPrice}</span>
          </p>
          <p className="text-xs">${carRent} per day</p>
        </div>

        <p className="text-sm flex justify-between">
          Taxes and fees <span>included</span>
        </p>
        <div className="border-t p-2 space-y-3">
          <p className="flex justify-between font-bold">
            Total <span>${totalPrice}</span>
          </p>
          <CustomButton
            title={`Pay $${totalPrice}`}
            btnType="submit"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            icon="/right-arrow.svg"
            handleClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
