import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import DishList from "../DishList";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "@/styles/swiper.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    {/* <div className="content-container"> */}
                    <div className="swiper-slide-style">
                        <h2>Hello there - Welcome Message with picture</h2>
                        <Image
                            src="http://renewensel.com/fphar/images/dishes_01.png"
                            width={500}
                            height={500}
                        />
                    </div>
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-style">
                        {/* <DishList /> */}
                        <h2>picture of the place and some infos</h2>
                        <Image
                            src="http://renewensel.com/fphar/images/dishes_02.png"
                            width={500}
                            height={500}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-style">
                        <h2>maybe google maps shit</h2>
                        <Image
                            src="http://renewensel.com/fphar/images/dishes_03.png"
                            width={500}
                            height={500}
                        />
                        <h2>maybe google maps shit</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
