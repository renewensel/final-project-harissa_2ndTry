import DrinkList from "@/components/DrinkList";
import Navigation from "@/components/Navigation";

export default function Drinks() {
    return (
        <>
            <Navigation className="header" />
            <DrinkList />

            {/* <div className="container-styles">
                <div className="content-container">test</div>
            </div> */}
        </>
    );
}
