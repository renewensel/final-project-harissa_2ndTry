import DrinkList from "@/components/DrinkList";
import Navigation from "@/components/Navigation";

export default function Drinks() {
    return (
        <>
            <div className="container-styles">
                <Navigation />
            </div>
            <div className="content-container">
                <DrinkList />
            </div>
        </>
    );
}
