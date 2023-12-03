import useSWR from "swr";

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
                    <img
                        src={drink.drinkImage}
                        alt={drink.drinkImage}
                        width={50}
                    />
                    <p>{drink.price}€</p>
                </li>
            ))}
        </ul>
    );
}
