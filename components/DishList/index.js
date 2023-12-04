import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header";

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
                        <Link href={`/${dish._id}`}>{dish.dish}</Link>
                        <p>{dish.ingredients}</p>
                        <Image
                            src={dish.dishImage}
                            alt={dish.dishImage}
                            width={70}
                            height={70}
                        />

                        <p>Meat: {dish.ingredientsIcons.meat.toString()}</p>
                        <p>
                            Vegetarian:{" "}
                            {dish.ingredientsIcons.vegetarian.toString()}
                        </p>
                        <p>Vegan: {dish.ingredientsIcons.vegan.toString()}</p>

                        <p>Sweet: {dish.flavour.sweet.toString()}</p>
                        <p>Spicy: {dish.flavour.spicy.toString()}</p>
                        <p>Mild: {dish.flavour.mild.toString()}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
