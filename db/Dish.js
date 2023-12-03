import mongoose from "mongoose";

const { Schema } = mongoose;

const dishSchema = new Schema({
    id: { type: Number, required: true },
    dish: { type: String, required: true },
    dishImage: { type: String }, // Assuming dish-image is a URL
    ingredients: { type: String, required: true },
    ingredientsIcons: {
        meat: { type: Boolean, default: false },
        vegetarian: { type: Boolean, default: false },
        vegan: { type: Boolean, default: false },
    },
    flavour: {
        sweet: { type: Boolean, default: false },
        spicy: { type: Boolean, default: false },
        mild: { type: Boolean, default: false },
    },
    isShown: { type: Boolean, default: true },
});

const Dish = mongoose.models.Dish || mongoose.model("Dish", dishSchema);

export default Dish;
