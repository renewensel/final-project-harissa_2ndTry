// pages/index.js
import Image from "next/image";
import SwiperSlider from "@/components/Swiper";
import Navigation from "@/components/Navigation";
import Page from "@/components/page";
import Link from "next/link";

export default function Home() {
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
                <span
                    style={{
                        fontWeight: "600",
                    }}
                >
                    &nbsp; 27. Nov. - 01. Dec.
                </span>
            </Link>
        </Page>
    );
}
