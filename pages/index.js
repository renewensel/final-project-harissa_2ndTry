// pages/index.js
import Image from "next/image";
import SwiperSlider from "@/components/Swiper";
import Navigation from "@/components/Navigation";
import Page from "@/components/page";
import Link from "next/link";
import { getRandomDateInCurrentWeek } from "@/components/DishList/getRandomDateInCurrentWeek";
// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

export default function Home() {
    // Move the dateRange calculation inside the component
    const { startOfWeek, endOfWeek } = getRandomDateInCurrentWeek();
    const formattedStartDate = startOfWeek?.toLocaleDateString("en-US", {
        weekday: "short",
        // year: "numeric",
        month: "short",
        day: "numeric",
    });
    const formattedEndDate = endOfWeek?.toLocaleDateString("en-US", {
        weekday: "short",
        // year: "numeric",
        month: "short",
        day: "numeric",
    });
    const dateRange = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <Page>
            <div className="content-container">
                <Navigation className="header" />
            </div>

            <div className="content-container">
                <div>
                    <SwiperSlider />
                    {/* <h1>Hello there!</h1>
                    <Image
                        src="http://renewensel.com/fphar/images/dishes_01.png"
                        width={500}
                        height={500}
                        alt="Picture dish 1 of 4"
                        priority
                    /> */}
                </div>
            </div>
            <Link href={"/dishes"} alt="weekly-menu">
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
            </Link>
        </Page>
    );
}
