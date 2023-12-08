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
            {/* <h4 href={"/dishes"} alt="weekly-menu">
                <span
                    style={{
                        fontFamily: "Arial",
                        fontSize: "0.8rem",
                        fontWeight: "300",
                    }}
                >
                    ➔ &nbsp;Menu from{" "}
                </span>
                <br />
                <span
                    style={{
                        fontFamily: "Arial",
                        fontWeight: "600",
                    }}
                >
                    {dateRange}
                </span>
            </h4> */}
            <DishCard />
            {/* <ul>
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
            {/* <DishIcon
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
                </ul> */}
        </>
    );
}
