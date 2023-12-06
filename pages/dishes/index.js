import DishList from "@/components/DishList";
import Navigation from "@/components/Navigation";
import Page from "@/components/page";

export default function Dishes() {
    return (
        <>
            <Navigation className="header" />
            <DishList />
        </>
    );
}
