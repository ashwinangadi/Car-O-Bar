import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type : "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        line_items:body.map((item :  any)=>{
            return {
                price_data:{
                    currency : "usd",
                    product_data : {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                    
                },            
                quantity: item.quantity,    
            };
        }),
        phone_number_collection:{
            enabled: true
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}
