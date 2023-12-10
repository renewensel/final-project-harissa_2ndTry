import dbConnect from "@/db/dbConnect";
import Dish from "@/db/Dish";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const dishes = await Dish.find();
        console.log("GET Request - Dishes:", dishes);
        response.status(200).json(dishes);
    }

    if (request.method === "POST") {
        try {
            const { dishId, isShown } = request.body;
            console.log("POST Request - Dish ID:", dishId);
            console.log("POST Request - isShown:", isShown);

            // Update the isShown property for the specified dishId
            const updatedDish = await Dish.findOneAndUpdate(
                { _id: dishId },
                { isShown },
                { new: true }
            );

            if (!updatedDish) {
                console.log("Dish not found");
                return response.status(404).json({ error: "Dish not found" });
            }

            console.log("POST Request - Updated Dish:", updatedDish);
            response.status(200).json(updatedDish);
        } catch (error) {
            console.error("POST Request - Error:", error.message);
            response.status(400).json({ error: error.message });
        }
    }
}
