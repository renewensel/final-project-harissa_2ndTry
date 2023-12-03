import mongoose from "mongoose";

const { Schema } = mongoose;

const drinkSchema = new Schema({
    id: { type: Number, required: true },
    drink: { type: String, required: true },
    drinkImage: { type: String }, // Assuming dish-image is a URL
    price: { type: String, required: true },
    isShown: { type: Boolean, default: true },
});

const Drink = mongoose.models.Drink || mongoose.model("Drink", drinkSchema);

export default Drink;
