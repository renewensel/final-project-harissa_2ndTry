import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";

export default function DrinkList() {
    const { data, error } = useSWR("/api/drinks");
    const [hoveredDrink, setHoveredDrink] = useState(null);

    if (error) {
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const shownDrinks = data.filter((drink) => drink.isShown);

    // Get the first drink to show by default
    const defaultDrink = shownDrinks[0];

    return (
        <>
            <div className="drink-list-container">
                {/* Show the first image by default only if there's no hover */}
                {!hoveredDrink && (
                    <div className="hovered-drink-image">
                        <Image
                            src={defaultDrink.drinkImage}
                            alt={defaultDrink.drinkImage}
                            width={190}
                            height={500}
                        />
                    </div>
                )}

                {hoveredDrink && (
                    <div className="hovered-drink-image">
                        <Image
                            src={hoveredDrink.drinkImage}
                            alt={hoveredDrink.drinkImage}
                            width={190}
                            height={500}
                        />
                    </div>
                )}

                <ul className="drink-list-box">
                    {shownDrinks.map((drink) => (
                        <li
                            key={drink.id}
                            className="drink-list"
                            onMouseEnter={() => setHoveredDrink(drink)}
                            onMouseLeave={() => setHoveredDrink(null)}
                        >
                            {/* <div className="image-container">
                                <Image
                                    src={drink.drinkImage}
                                    alt={drink.drinkImage}
                                    width={40}
                                    height={100}
                                />
                            </div> */}
                            <p className="drink-name">{drink.drink}</p>
                            <p className="drink-price">{drink.price}€</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
