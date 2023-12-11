import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
// import DishItemOne from "../DishItemOne/DishItemOne";
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
                        <div className="heading-front-1">
                            <h2>
                                &nbsp;&nbsp;Healthy, fast,
                                <br />
                                convenient and
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;affordable.
                                <br />
                                <br />
                                Different dishes
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every week.
                            </h2>
                        </div>
                        <div className="dish-card-front">
                            <Image
                                src="http://renewensel.com/fphar/images/dishes_01.png"
                                width={550}
                                height={550}
                            />
                            {/* <div className="dish-card-front-title-icon">
                                <h2>
                                    Minced beef with coriander potatoes{" "}
                                    <span>
                                        <Image
                                            src="/meat.png"
                                            width={20}
                                            height={20}
                                        />
                                    </span>
                                    <p className="badge">Sweet</p>
                                </h2>
                                <p className="dish-li">
                                    Lamb, bell peppers, onions, spices, yogurt
                                    sauce
                                </p>
                            </div> */}

                            {/* <Link href={"/dishes"} alt="weekly-menu">
                                ➔ Menu from 27. Nov. - 01. Dec.
                            </Link> */}
                        </div>
                    </div>

                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-style">
                        {/* <Image
                                src="/polaroid-harissa-1.png"
                                width={550}
                                height={550}
                            /> */}
                        <div className="front-site-2">
                            <div>
                                <p className="welcome-text-site-2 welcome-text-box">
                                    With friendly service, a beautiful ambience,
                                    quality and the option to take away, you can
                                    choose between four different dishes of
                                    oriental cuisine every day.
                                </p>
                            </div>
                            <div className="pad-right">
                                <h3 className="heading-front-2">
                                    Harissa Oriental Cuisine
                                </h3>
                                <p>Brückenstr. 10a, 10179 Berlin</p>
                            </div>

                            <div>
                                <h3 className="heading-front-2">
                                    opening hours
                                </h3>
                                <p>Mon - Fri: 11:00 - 14:45</p>
                            </div>
                        </div>
                        <div className="laden-card-front-2">
                            <Image
                                src="/harissa-laden-4.png"
                                width={613}
                                height={460}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="swiper-slide-style">
                        <h3>
                            Arabic / Mediterranean style Dishes Healthy
                            colourful meals Multiple options
                        </h3>
                        <Image
                            src="http://renewensel.com/fphar/images/dishes_03.png"
                            width={500}
                            height={500}
                        />
                        <h3>
                            different dishes every week vegetarian / vegan
                            Option
                        </h3>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
