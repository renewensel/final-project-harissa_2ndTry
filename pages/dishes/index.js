import DishList from "@/components/DishList";
import Navigation from "@/components/Navigation";
export default function Drinks() {
    return (
        <>
            <div className="container-styles">
                <Navigation />
            </div>
            <div className="content-container">
                <div className="drink-list-container">
                    <h2>Menu from 27. Nov. - 01. Dec.</h2>
                    <DishList />
                </div>
            </div>
        </>
    );
}
