import useSWR from "swr";
import Image from "next/image";
import DishIcon from "./DishIcon.js";
import DishCard from "../DishCard/DishCard.js";
import { getRandomDateInCurrentWeek } from "./getRandomDateInCurrentWeek.js";

export default function DishList() {
    const { data, isLoading } = useSWR("/api/dishes");

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return null;
    }

    const shownDishes = data.filter((dishes) => dishes.isShown);

    // Randomize the order of shownDishes
    const shuffledDishes = [...shownDishes].sort(() => Math.random() - 0.5);

    // Take only the first 4 dishes
    const firstFourDishes = shuffledDishes.slice(0, 4);

    return (
        <>
            <DishCard />
        </>
    );
}
