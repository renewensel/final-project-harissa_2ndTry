// components/DishAdminCard.js
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import { getRandomDateInCurrentWeek } from "@/components/DishList/getRandomDateInCurrentWeek";
import DishToggle from "@/components/DishToggle";
import styles from "@/styles/DishAdminCard.module.css";

export default function DishAdminCard() {
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

    // ... existing event handlers and other logic ...

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

    const filteredDishes =
        filter === "All"
            ? data
            : filter === "Online"
            ? visibleDishes
            : data.filter((dish) => hiddenDishes.includes(dish.id.toString()));

    return (
        <div>
            <ul className={styles.dishListBoxAdmin}>
                <div className={styles.dateStatusButtonsBox}>
                    <h4 className={styles.menuH4Admin}>
                        {/* ... existing code ... */}
                    </h4>
                    <div className={styles.buttonStatusAdminBox}>
                        {/* ... existing code ... */}
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
                                {/* ... existing code ... */}
                            </div>
                            {/* ... existing code ... */}
                            <div>
                                <DishToggle dish={dish} />
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}
