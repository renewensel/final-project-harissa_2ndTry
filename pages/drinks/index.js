import DrinkList from "@/components/DrinkList";
import Navigation from "@/components/Navigation";

export default function Drinks() {
    return (
        <>
            <div className="container-styles">
                <Navigation />
            </div>
            <DrinkList />
        </>
    );
}
