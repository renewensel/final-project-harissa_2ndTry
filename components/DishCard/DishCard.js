import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import { getRandomDateInCurrentWeek } from "../DishList/getRandomDateInCurrentWeek";
import DishIcon from "../DishList/DishIcon";

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

    // Shuffle the array of shown dishes
    const shuffledDishes = shuffleArray(shownDishes);

    // Limit the number of dishes to be shown to 4
    const limitedDishes = shuffledDishes.slice(0, 4);

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
            <div className="dish-list-container">
                <div className="dish-image-zIndex">
                    {!hoveredDish && (
                        <div className="default-dish-image">
                            <Image
                                src={defaultDish.dishImage}
                                alt={defaultDish.dishImage}
                                width={700}
                                height={700}
                            />
                        </div>
                    )}
                </div>

                {hoveredDish && (
                    <div className="hovered-dish-image">
                        <Image
                            src={hoveredDish.dishImage}
                            alt={hoveredDish.dishImage}
                            width={700}
                            height={700}
                        />
                    </div>
                )}

                <ul className="dish-list-box">
                    <div>
                        <h4 href={"/dishes"} alt="weekly-menu">
                            <span
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: "1.1rem",
                                    fontWeight: "300",
                                }}
                            >
                                ➔ &nbsp;Menu from{" "}
                            </span>
                            <span
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                }}
                            >
                                {dateRange}
                            </span>
                        </h4>
                    </div>
                    <div>
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
                                    <p className="dishes-dish-name">
                                        {dish.dish}&nbsp;
                                        <DishIcon
                                            type="meat"
                                            isTrue={dish.ingredientsIcons.meat}
                                        />
                                        <DishIcon
                                            type="vegetarian"
                                            isTrue={
                                                dish.ingredientsIcons.vegetarian
                                            }
                                        />
                                        <DishIcon
                                            type="vegan"
                                            isTrue={dish.ingredientsIcons.vegan}
                                        />
                                    </p>

                                    <p className="dish-ingredients">
                                        {dish.ingredients}
                                    </p>
                                </div>
                                <div className="dish-price">
                                    <p>5,90€</p>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </>
    );
}

// Function to shuffle an array
function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
}
