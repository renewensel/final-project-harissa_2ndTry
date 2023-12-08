import Image from "next/image";

export default function DishCard2() {
    // Define dateRange variable (replace with your actual date logic)
    const dateRange = "27. Nov. - 01. Dec.";

    return (
        <>
            <div className="dish-list-container">
                {/* Use anchor tag for the link */}
                {/* <a href={"/dishes"}>
                    <span
                        style={{
                            fontFamily: "Arial",
                            fontSize: "0.8rem",
                            fontWeight: "300",
                        }}
                    >
                        ➔ &nbsp;Menu from{" "}
                    </span>
                    <br />
                    <span
                        style={{
                            fontFamily: "Arial",
                            fontWeight: "600",
                        }}
                    >
                        {dateRange}
                    </span>
                </a> */}

                <div>
                    <Image
                        src="http://renewensel.com/fphar/images/dishes_01.png"
                        width={250}
                        height={250}
                        alt="Dish Image"
                    />
                    <p className="badge">Sweet</p>
                    <h3>Minced beef with coriander potatoes</h3>
                    <p className="dish-li">
                        Lamb, bell peppers, onions, spices, yogurt sauce
                    </p>
                    <Image src="/meat.png" width={30} height={30} />
                </div>
            </div>
        </>
    );
}
