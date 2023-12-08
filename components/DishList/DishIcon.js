// DishIcon.js
import Image from "next/image";

const DishIcon = ({ type, isTrue }) => {
    // Determine the icon source based on the type and isTrue value
    const iconSrc = isTrue ? `/${type}.png` : null;

    return iconSrc ? (
        <Image src={iconSrc} alt={type} width={30} height={30} />
    ) : null;
};

export default DishIcon;
