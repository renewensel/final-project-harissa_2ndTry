import DishList from "@/components/DishList";
import Navigation from "@/components/Navigation";
import Page from "@/components/page";

export default function Dishes() {
    return (
        <>
            <Navigation className="header" />
            <h5>Menu from 27. Nov. - 01. Dec.</h5>
            <DishList />
            <div className="container-styles">test</div>
        </>
    );
}
