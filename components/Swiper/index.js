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
                                width={500}
                                height={500}
                            />
                            <div className="dish-card-front-title-icon">
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
                            </div>

                            {/* <Link href={"/dishes"} alt="weekly-menu">
                                ➔ Menu from 27. Nov. - 01. Dec.
                            </Link> */}
                        </div>
                    </div>

                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-style">
                        <Image src="/Startbild_1.png" fill alt="startbild1" />
                        {/* <DishList /> */}
                        {/* <h2>picture of the place and some infos</h2>
                        <Image
                            src="http://renewensel.com/fphar/images/dishes_02.png"
                            width={500}
                            height={500}
                        /> */}
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
