import DishList from "@/components/DrinkList";
import JokeList from "../components/JokeList";
import DrinkList from "@/components/DishList";

export default function HomePage() {
    return (
        <>
            <DrinkList />
            <DishList />
            <JokeList />
        </>
    );
}
