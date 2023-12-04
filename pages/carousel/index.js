// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            <div className="text-center">
                <Image
                    src="http://renewensel.com/fphar/images/dishes_01.png"
                    alt="Dish 1"
                    className="mx-auto rounded-lg"
                    width={100}
                    height={100}
                />
                <p className="text-lg mt-2">Dish 1</p>
            </div>
            <div className="text-center">
                <Image
                    src="http://renewensel.com/fphar/images/dishes_02.png"
                    alt="Dish 2"
                    className="mx-auto rounded-lg"
                    width={100}
                    height={100}
                />
                <p className="text-lg mt-2">Dish 2</p>
            </div>
            <div className="text-center">
                <Image
                    src="http://renewensel.com/fphar/images/dishes_03.png"
                    alt="Dish 3"
                    className="mx-auto rounded-lg"
                    width={100}
                    height={100}
                />
                <p className="text-lg mt-2">Dish 3</p>
            </div>
        </Slider>
    );
};

export default Carousel;
