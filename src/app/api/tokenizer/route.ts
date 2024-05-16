import Midtrans from "midtrans-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id, name, price, quantity } = await request.json();

    const snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: process.env.SECRET,
        clientKey: process.env.NEXT_PUBLIC_CLIENT,
    });

    const parameter = {
        item_details: {
            name: name,
            price: price,
            quantity: quantity,
        },
        transaction_details: {
            order_id: id,
            gross_amount: price * quantity,
        },
    };

    const token = await snap.createTransactionToken(parameter);

    return NextResponse.json({ token });
}
