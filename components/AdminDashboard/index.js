// pages/index.js
import useSWR from "swr";
import styles from "@/styles/adminDashboard.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminDashboard = () => {
    const { data: dishes, error: dishError } = useSWR("/api/dishes", fetcher);
    const { data: drinks, error: drinkError } = useSWR("/api/drinks", fetcher);

    if (dishError || drinkError) {
        return <div>Error loading data</div>;
    }

    if (!dishes || !drinks) {
        return <div>Loading...</div>;
    }

    const renderTable = (data, title) => (
        <div className={styles.tableContainer}>
            <h2>{title}</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Dish/Drink</th>
                        {title === "Dishes" && <th>Ingredients</th>}
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.dish || item.drink}</td>
                            {title === "Dishes" && <td>{item.ingredients}</td>}
                            <td>{item.isShown ? "Online" : "Offline"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div>
            <h2>Welcome to our Restaurant!</h2>

            {renderTable(dishes, "Dishes")}
            {renderTable(drinks, "Drinks")}
        </div>
    );
};

export default AdminDashboard;
