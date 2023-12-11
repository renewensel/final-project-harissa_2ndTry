// pages/index.js
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/adminDashboard.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminDashboard = () => {
    const { data: dishes, error: dishError } = useSWR("/api/dishes", fetcher);
    const { data: drinks, error: drinkError } = useSWR("/api/drinks", fetcher);

    const [dishFilter, setDishFilter] = useState("All");
    const [drinkFilter, setDrinkFilter] = useState("All");

    if (dishError || drinkError) {
        return <div>Error loading data</div>;
    }

    if (!dishes || !drinks) {
        return <div>Loading...</div>;
    }

    const renderTable = (data, title, filter, setFilter) => (
        <div className={styles.tableContainer}>
            <h2>{title}</h2>
            <div className={styles.buttonsContainer}>
                <button
                    className={
                        filter === "All"
                            ? styles.activeButtonNewStyleAllActive
                            : styles.activeButtonNewStyleAll
                    }
                    onClick={() => setFilter("All")}
                >
                    ALL
                </button>
                <button
                    className={
                        filter === "true"
                            ? styles.activeButtonNewStyleOnlineActive
                            : styles.activeButtonNewStyleOnline
                    }
                    onClick={() => setFilter("true")}
                >
                    Online
                </button>
                <button
                    className={
                        filter === "false"
                            ? styles.activeButtonNewStyleOfflineActive
                            : styles.activeButtonNewStyleOffline
                    }
                    onClick={() => setFilter("false")}
                >
                    Offline
                </button>
            </div>
            <table className={styles.table}>
                <tbody>
                    {data
                        .filter((item) => {
                            if (filter === "All") return true;
                            return String(item.isShown) === filter;
                        })
                        .map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <Image
                                        src={
                                            title === "Dishes"
                                                ? item.dishImage
                                                : item.drinkImage
                                        }
                                        alt={
                                            title === "Dishes"
                                                ? item.dish
                                                : item.drink
                                        }
                                        width={title === "Dishes" ? 100 : 45}
                                        height={100}
                                    />
                                </td>
                                <td>{item.dish || item.drink}</td>
                                {title === "Dishes" && (
                                    <td className={styles.ingredients}>
                                        {item.ingredients}
                                    </td>
                                )}
                                <td>{item.isShown ? "Online" : "Offline"}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <>
            <div className={styles.dateStatusButtonsBox}>
                <h5 className={styles.adminH4}>Dishes</h5>
                <h4
                    className={styles.menueH4Admin}
                    href="/dishes"
                    alt="weekly-menu"
                >
                    <span
                        style={{
                            fontFamily: "Arial",
                            fontSize: "1.1rem",
                            fontWeight: 300,
                        }}
                    >
                        ➔ &nbsp;Menu from{" "}
                    </span>
                    <span
                        style={{
                            fontFamily: "Arial",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                        }}
                    >
                        Mon, Dec 11, 2023 - Fri, Dec 15, 2023
                    </span>
                </h4>
                <div className={styles.buttonStatusAdminBox}>
                    {/* <button className={styles.adminDashboardButton}>All</button>
                    <button className={styles.adminDashboardButton}>
                        Online
                    </button>
                    <button className={styles.adminDashboardButton}>
                        Offline
                    </button> */}
                </div>
            </div>
            {renderTable(dishes, "Dishes", dishFilter, setDishFilter)}
            <div className={styles.dateStatusButtonsBox}>
                {/* <h5 className={styles.adminH4}>Dishes</h5> */}
                <h4
                    className={styles.menueH4Admin}
                    href="/dishes"
                    alt="weekly-menu"
                >
                    <span
                        style={{
                            fontFamily: "Arial",
                            fontSize: "1.1rem",
                            fontWeight: 300,
                        }}
                    >
                        ➔ &nbsp;Menu from{" "}
                    </span>
                    <span
                        style={{
                            fontFamily: "Arial",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                        }}
                    >
                        Mon, Dec 11, 2023 - Fri, Dec 15, 2023
                    </span>
                </h4>
            </div>
            {renderTable(drinks, "Drinks", drinkFilter, setDrinkFilter)}
        </>
    );
};

export default AdminDashboard;
