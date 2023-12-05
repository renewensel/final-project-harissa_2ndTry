import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import DishIcon from "./DishIcon.js"; // Import the DishIcon component

export default function DishList() {
    const { data, isLoading } = useSWR("/api/dishes");

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return null;
    }

    const shownDishes = data.filter((dishes) => dishes.isShown);

    return (
        <>
            <ul>
                {shownDishes.map((dish) => (
                    <li key={dish.id}>
                        {dish.flavour.sweet && <p className="badge">Sweet</p>}
                        {dish.flavour.spicy && <p className="badge">Spicy</p>}
                        {dish.flavour.mild && <p className="badge">Mild</p>}
                        <Link href={`/${dish._id}`}>{dish.dish}</Link>
                        <p>{dish.ingredients}</p>

                        <Image
                            src={dish.dishImage}
                            alt={dish.dishImage}
                            width={70}
                            height={70}
                        />

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
        </>
    );
}
