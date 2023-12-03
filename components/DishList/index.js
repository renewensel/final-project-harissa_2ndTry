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
                <li key={drink.id}>
                    <Link href={`/${drink._id}`}>{drink.drink}</Link>
                    <img
                        src={drink.drinkImage}
                        alt={drink.drinkImage}
                        width={150}
                    />
                    <p>{drink.price}€</p>
                </li>
            ))}
        </ul>
    );
}
