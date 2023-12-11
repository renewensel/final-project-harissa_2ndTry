// components/AdminDashboard/index.js
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";
import DishIcon from "../DishList/DishIcon";
import styles from "@/styles/adminDashboard.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminDashboard = () => {
    const { data: dishes, error: dishError } = useSWR("/api/dishes", fetcher);

    const [dishFilter, setDishFilter] = useState("All");

    if (dishError) {
        return <div>Error loading data</div>;
    }

    if (!dishes) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={styles.dateStatusButtonsBox}>
                <h5 className={styles.adminH4}>Dishes</h5>
            </div>
            <div className={styles.tableContainer}>
                <div className={styles.buttonsContainer}>
                    <button
                        className={
                            dishFilter === "All"
                                ? styles.activeButtonNewStyleAllActive
                                : styles.activeButtonNewStyleAll
                        }
                        onClick={() => setDishFilter("All")}
                    >
                        ALL
                    </button>
                    <button
                        className={
                            dishFilter === "true"
                                ? styles.activeButtonNewStyleOnlineActive
                                : styles.activeButtonNewStyleOnline
                        }
                        onClick={() => setDishFilter("true")}
                    >
                        Online
                    </button>
                    <button
                        className={
                            dishFilter === "false"
                                ? styles.activeButtonNewStyleOfflineActive
                                : styles.activeButtonNewStyleOffline
                        }
                        onClick={() => setDishFilter("false")}
                    >
                        Offline
                    </button>
                </div>
                <div>
                    {dishes
                        .filter((item) => {
                            if (dishFilter === "All") return true;
                            return String(item.isShown) === dishFilter;
                        })
                        .map((item) => (
                            <li
                                key={item._id}
                                className={`list dish-li ${
                                    String(item.isShown) === "false"
                                        ? styles.hiddenDish
                                        : ""
                                }`}
                            >
                                <div className="default-dish-image">
                                    <Image
                                        src={item.dishImage}
                                        alt={item.dish}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    {Object.entries(item.flavour)
                                        .filter(
                                            ([key, value]) => value === true
                                        )
                                        .map(([key]) => (
                                            <p
                                                key={key}
                                                className="badge"
                                                style={{ fontSize: "0.7rem" }}
                                            >
                                                {key}
                                            </p>
                                        ))}
                                </div>
                                <div className="dish-list-name-ingredients-spaces">
                                    <div className="dishes-dish-name">
                                        {item.dish}&nbsp;
                                        <span>
                                            <DishIcon
                                                type="meat"
                                                isTrue={
                                                    item.ingredientsIcons.meat
                                                }
                                            />
                                            <DishIcon
                                                type="vegetarian"
                                                isTrue={
                                                    item.ingredientsIcons
                                                        .vegetarian
                                                }
                                            />
                                            <DishIcon
                                                type="vegan"
                                                isTrue={
                                                    item.ingredientsIcons.vegan
                                                }
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="dish-ingredients">
                                            {item.ingredients}
                                        </p>
                                    </div>
                                </div>
                                <div className="dish-price">
                                    <p>5,90€</p>
                                </div>
                                <div>
                                    <button
                                        style={{ pointerEvents: "none" }}
                                        className={`status-button-${
                                            String(item.isShown) === "true"
                                                ? "online"
                                                : "offline"
                                        }`}
                                    >
                                        {String(item.isShown) === "true"
                                            ? "Online"
                                            : "Offline"}
                                    </button>
                                    <button className="status-button-check-on">
                                        ✔ Add
                                    </button>
                                    <button className="status-button-check-off">
                                        X Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
