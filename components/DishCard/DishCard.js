export default function DishCard() {
    return (
        <>
            <div className="dish-container">
                <div className="dish-container-icons">
                    <div className="dish-badge">
                        {" "}
                        <p className="badge">Sweet</p>
                    </div>
                    <div className="dish-meat">meat</div>
                </div>
                <div className="dish-container-text">
                    <div className="dish-name">
                        Minced beef with coriander potatoes
                    </div>
                    <div className="dish-ingredients">
                        Chicken, prunes, tomatoes, cinnamon
                    </div>
                </div>
                <div className="dish-container-price">5,80€</div>
            </div>
        </>
    );
}
