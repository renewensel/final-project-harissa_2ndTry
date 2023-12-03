// pages/api/drinks/index.js

import dbConnect from "@/db/dbConnect";
import Drink from "@/db/Drink";

export default async function handler(request, response) {
    await dbConnect();
    if (request.method === "GET") {
        const drinks = await Drink.find();
        console.log(drinks);
        response.status(200).json(drinks);
    }
}
