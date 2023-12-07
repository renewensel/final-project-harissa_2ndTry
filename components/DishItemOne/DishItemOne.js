import { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import DishIcon from "../DishList/DishIcon";

export default function DishItemOne() {
    const { data, isLoading } = useSWR("/api/dishes");
    const [currentDishIndex, setCurrentDishIndex] = useState(0);

    useEffect(() => {
        // Wait until data is available
        if (!data) return;

        // Retrieve the current dish index from local storage or generate a random index
        const storedIndex = localStorage.getItem("currentDishIndex");
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentDishIndex(
            storedIndex ? parseInt(storedIndex, 10) : randomIndex
        );
    }, [data]);

    useEffect(() => {
        // Update local storage with the current dish index
        localStorage.setItem("currentDishIndex", currentDishIndex);
    }, [currentDishIndex]);

    if (isLoading || !data) {
        return <h1>Loading...</h1>;
    }

    const currentDish = data[currentDishIndex];

    return (
        <>
            <h5>Menu from 27. Nov. - 01. Dec.</h5>

            <div className="dish-list-container">
                <ul>
                    <li key={currentDish.id} className="dish-li">
                        <div>
                            <Image
                                src={currentDish.dishImage}
                                alt={currentDish.dishImage}
                                width={70}
                                height={70}
                            />
                        </div>
                        <div>
                            {currentDish.flavour.sweet && (
                                <p className="badge">Sweet</p>
                            )}
                            {currentDish.flavour.spicy && (
                                <p className="badge">Spicy</p>
                            )}
                            {currentDish.flavour.mild && (
                                <p className="badge">Mild</p>
                            )}
                        </div>
                        <h3>{currentDish.dish}</h3>
                        <p>{currentDish.ingredients}</p>
                        {/* Pass boolean values directly to DishIcon */}
                        <DishIcon
                            type="meat"
                            isTrue={currentDish.ingredientsIcons.meat}
                        />
                        <DishIcon
                            type="vegetarian"
                            isTrue={currentDish.ingredientsIcons.vegetarian}
                        />
                        <DishIcon
                            type="vegan"
                            isTrue={currentDish.ingredientsIcons.vegan}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}
