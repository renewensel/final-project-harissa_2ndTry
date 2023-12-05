// pages/index.js
import Image from "next/image";
import SwiperSlider from "@/components/Swiper";
import Navigation from "@/components/Navigation";
import Page from "@/components/page";

export default function Home() {
    return (
        <Page>
            <div>
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
                {/* <div>Footer</div> */}
            </div>
        </Page>
    );
}
