import useSWR from "swr";
import Image from "next/image";
import DishIcon from "./DishIcon.js";
import { getRandomDateInCurrentWeek } from "./getRandomDateInCurrentWeek"; // Correct import statement

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
            <h5>Menu from {dateRange}</h5>

            <div className="dish-list-container">
                <ul>
                    {firstFourDishes.map((dish) => (
                        <li key={dish.id} className="dish-li">
                            <div>
                                <Image
                                    src={dish.dishImage}
                                    alt={dish.dishImage}
                                    width={70}
                                    height={70}
                                />
                            </div>
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
                            <h3>{dish.dish}</h3>
                            <p>{dish.ingredients}</p>

                            {/* Pass boolean values directly to DishIcon */}
                            <DishIcon
                                type="meat"
                                isTrue={dish.ingredientsIcons.meat}
                            />
                            <DishIcon
                                type="vegetarian"
                                isTrue={dish.ingredientsIcons.vegetarian}
                            />
                            <DishIcon
                                type="vegan"
                                isTrue={dish.ingredientsIcons.vegan}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
