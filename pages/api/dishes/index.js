// pages/api/dishes/index.js

import dbConnect from "@/db/dbConnect";
import Dish from "@/db/Dish";

export default async function handler(request, response) {
    await dbConnect();
    if (request.method === "GET") {
        const dishes = await Dish.find();
        console.log(dishes);
        response.status(200).json(dishes);
    }
}
