import DishList from "@/components/DishList";
import JokeList from "../components/JokeList";
import DrinkList from "@/components/DrinkList";

export default function HomePage() {
    return (
        <>
            <DrinkList />
            <DishList />
            <JokeList />
        </>
    );
}
