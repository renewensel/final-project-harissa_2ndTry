// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="custom-carousel">
            <div>
                <img
                    src="http://renewensel.com/fphar/images/dishes_01.png"
                    alt="Dish 1"
                    width={300}
                    height={200}
                    className="custom-carousel-item"
                />
            </div>
            <div>
                <img
                    src="http://renewensel.com/fphar/images/dishes_02.png"
                    alt="Dish 2"
                    width={300}
                    height={200}
                    className="custom-carousel-item"
                />
            </div>
            <div>
                <img
                    src="http://renewensel.com/fphar/images/dishes_03.png"
                    alt="Dish 3"
                    width={300}
                    height={200}
                    className="custom-carousel-item"
                />
            </div>
        </Slider>
    );
};

export default Carousel;
