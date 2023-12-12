// Import necessary libraries and components
import useSWR from "swr";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRandomDateInCurrentWeek } from "../DishList/getRandomDateInCurrentWeek";
import DishIcon from "../DishList/DishIcon";
import styles from "@/styles/DishAdmin.module.css";

export default function DishCard() {
    const { data, error } = useSWR("/api/dishes");
    const [visibleDishes, setVisibleDishes] = useState([]);
    const [hiddenDishes, setHiddenDishes] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        if (data) {
            // Initialize visible dishes state based on initial data
            const initialVisibleDishes = data.filter((dish) => dish.isShown);
            setVisibleDishes(initialVisibleDishes);
        }
    }, [data]);

    const handleHideDish = (dishId) => {
        // Update the visibility of the dish with the provided dishId
        const updatedVisibleDishes = visibleDishes.map((dish) => {
            if (dish.id === dishId) {
                return { ...dish, isShown: false };
            }
            return dish;
        });

        setVisibleDishes(updatedVisibleDishes);
        setHiddenDishes((prevHiddenDishes) => [
            ...prevHiddenDishes,
            dishId.toString(),
        ]);
    };

    const handleShowDish = (dishId) => {
        // Update the visibility of the dish with the provided dishId
        const updatedVisibleDishes = visibleDishes.map((dish) => {
            if (dish.id === dishId) {
                return { ...dish, isShown: true };
            }
            return dish;
        });

        setVisibleDishes(updatedVisibleDishes);
        setHiddenDishes((prevHiddenDishes) =>
            prevHiddenDishes.filter((id) => id !== dishId.toString())
        );
    };

    const handleFilter = (filterType) => {
        setFilter(filterType);
        if (filterType === "Offline") {
            // Filter dishes based on isShown property
            const offlineDishes = data.filter((dish) => !dish.isShown);
            setVisibleDishes(offlineDishes);
        } else {
            // For "All" and "Online" filters, use the original data
            setVisibleDishes(data.filter((dish) => dish.isShown));
        }
    };

    if (error) {
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    // Format date range for display
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

    // Filter dishes based on the selected filter
    const filteredDishes =
        filter === "All"
            ? data
            : filter === "Online"
            ? visibleDishes
            : data.filter((dish) => hiddenDishes.includes(dish.id.toString()));

    return (
        <div>
            <ul className="dish-list-box-admin">
                <div className="date-status-buttons-box">
                    <h5 className="admin-h4">Dishes</h5>
                    <h4
                        className="menue-h4-admin"
                        href={"/dishes"}
                        alt="weekly-menu"
                    >
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
                    <div className="button-status-admin-box">
                        <button
                            className="button-status-admin-dishes"
                            onClick={() => handleFilter("All")}
                        >
                            All
                        </button>
                        <button
                            className="button-status-admin-dishes"
                            onClick={() => handleFilter("Online")}
                        >
                            Online
                        </button>
                        <button
                            className="button-status-admin-dishes"
                            onClick={() => handleFilter("Offline")}
                        >
                            Offline
                        </button>
                    </div>
                </div>

                <div>
                    {filteredDishes.map((dish) => (
                        <li
                            key={dish.id}
                            className={`list dish-li ${
                                !dish.isShown &&
                                hiddenDishes.includes(dish.id.toString())
                                    ? styles.hiddenDish
                                    : ""
                            }`}
                        >
                            <div className="default-dish-image">
                                <Image
                                    src={dish.dishImage}
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
                                <div className="dishes-dish-name">
                                    {dish.dish}&nbsp;
                                    <span>
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
                                    </span>
                                </div>

                                <div>
                                    <p className="dish-ingredients">
                                        {dish.ingredients}
                                    </p>
                                </div>
                            </div>
                            <div className="dish-price">
                                <p>5,90€</p>
                            </div>
                            <div>
                                <button
                                    style={{ pointerEvents: "none" }}
                                    className={`status-button-${
                                        dish.isShown ? "online" : "offline"
                                    }`}
                                    onClick={() =>
                                        dish.isShown
                                            ? handleShowDish(dish.id)
                                            : handleHideDish(dish.id)
                                    }
                                >
                                    {dish.isShown ? "Online" : "Offline"}
                                </button>
                                <button
                                    className="status-button-check-on"
                                    onClick={() => handleShowDish(dish.id)}
                                >
                                    ✔ Add
                                </button>
                                <button
                                    className="status-button-check-off"
                                    onClick={() => handleHideDish(dish.id)}
                                >
                                    X Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}
