import useSWR from "swr";
import Image from "next/image";

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
                    <h2>{drink.drink}</h2>
                    <Image
                        src={drink.drinkImage}
                        alt={drink.drinkImage}
                        width={40}
                        height={100}
                    />
                    <p>{drink.price}€</p>
                </li>
            ))}
        </ul>
    );
}
