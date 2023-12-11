// DishToggle/index.js
import useSWR from "swr";
import { useState } from "react";

const DishToggle = ({ dishId }) => {
    const [isShown, setIsShown] = useState(false);

    const { data: updatedDish } = useSWR(
        isShown ? `/api/dishes/show/${dishId}` : `/api/dishes/hide/${dishId}`,
        {
            method: "PATCH",
        }
    );

    const handleToggle = async () => {
        setIsShown(!isShown);
    };

    return (
        <div>
            <h2>Dish Toggle</h2>
            <button onClick={handleToggle}>Toggle Dish</button>
            {updatedDish && (
                <p>
                    Dish visibility updated:{" "}
                    {updatedDish.isShown ? "Online" : "Offline"}
                </p>
            )}
        </div>
    );
};

export default DishToggle;
