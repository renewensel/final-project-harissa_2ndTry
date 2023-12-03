import useSWR from "swr";
import Link from "next/link";

export default function DrinkList() {
    const { data, isLoading } = useSWR("/api/drinks");

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return null;
    }

    const shownDrinks = data.filter((drink) => drink.isShown);

    return (
        <ul>
            {shownDrinks.map((drink) => (
                <li key={dish.id}>
                    <Link href={`/${dish._id}`}>{dish.dish}</Link>
                    <p>{dish.ingredients}</p>
                    <img src={dish.dishImage} alt={dish.dishImage} width={70} />

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
    );
}
