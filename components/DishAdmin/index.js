import useSWR from "swr";
import Image from "next/image";
import { useEffect } from "react";
import { getRandomDateInCurrentWeek } from "../DishList/getRandomDateInCurrentWeek";
import DishIcon from "../DishList/DishIcon";

export default function DishCard() {
    const { data, error } = useSWR("/api/dishes");

    useEffect(() => {
        // You may add additional logic here if needed
    }, [data]);

    if (error) {
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

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
        <div className="dish-list-container">
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
                    {data.map((dish) => (
                        <li key={dish.id} className="list dish-li">
                            <div className="default-dish-image">
                                <Image
                                    src={dish.dishImage} // Using the dish's image
                                    alt={dish.dishImage}
                                    width={100}
                                    height={100}
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
                            <div>
                                <div>
                                    <button
                                        style={{
                                            Color: dish.isShown
                                                ? "green"
                                                : "grey",
                                        }}
                                    >
                                        {dish.isShown ? "Online" : "Offline"}
                                    </button>
                                </div>
                                <div>
                                    <button
                                        style={{
                                            Color: "green",
                                        }}
                                    >
                                        ✔
                                    </button>
                                    <button
                                        style={{
                                            Color: "red",
                                        }}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}
