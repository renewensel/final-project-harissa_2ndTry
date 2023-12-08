import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import { getRandomDateInCurrentWeek } from "../DishList/getRandomDateInCurrentWeek";
import Link from "next/link";
import DishCard2 from "../DishCard2/DishCard2";

export default function DishCard() {
    const { data, error } = useSWR("/api/dishes");
    const [hoveredDish, setHoveredDish] = useState(null);

    if (error) {
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    // Filter out only the dishes that should be shown
    const shownDishes = data.filter((dish) => dish.isShown);

    // Limit the number of dishes to be shown to 4
    const limitedDishes = shownDishes.slice(0, 4);

    // Get the default dish (the first one in the limitedDishes array)
    const defaultDish = limitedDishes[0];

    // Move the dateRange calculation inside the component
    const { startOfWeek, endOfWeek } = getRandomDateInCurrentWeek();
    const formattedStartDate = startOfWeek?.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const formattedEndDate = endOfWeek?.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <>
            {/* <div>
                <DishCard2 style={{ maxWidth: "200px" }} />

                <DishCard2 style={{ maxWidth: "200px" }} />

                <DishCard2 style={{ maxWidth: "200px" }} />

                <DishCard2 style={{ maxWidth: "200px" }} />
            </div> */}
            <div className="dish-list-container">
                {!hoveredDish && (
                    <div className="default-dish-image">
                        <Image
                            src={defaultDish.dishImage}
                            alt={defaultDish.dishImage}
                            width={500}
                            height={500}
                        />
                    </div>
                )}

                {hoveredDish && (
                    <div className="hovered-dish-image">
                        <Image
                            src={hoveredDish.dishImage}
                            alt={hoveredDish.dishImage}
                            width={500}
                            height={500}
                        />
                    </div>
                )}

                <ul className="dish-list-box">
                    {limitedDishes.map((dish) => (
                        <li
                            key={dish.id}
                            className="list dish-li"
                            onMouseEnter={() => setHoveredDish(dish)}
                            onMouseLeave={() => setHoveredDish(null)}
                        >
                            <div>
                                {dish.flavour.sweet && (
                                    <p className="badge">Sweet</p>
                                )}
                                {dish.flavour.spicy && (
                                    <p className="badge">Spicy</p>
                                )}
                                {dish.flavour.mild && (
                                    <p className="badge">Mild</p>
                                )}
                            </div>
                            <div className="dish-list-name-ingredients-spaces">
                                <p className="dishes-dish-name">{dish.dish}</p>
                                <p className="dish-ingredients">
                                    {dish.ingredients}
                                </p>
                                <p className="dish-price">{dish.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
