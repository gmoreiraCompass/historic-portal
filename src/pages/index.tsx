import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "./components/Header";
import Slider from "react-slick";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <span>{i}</span>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <main className={styles.slider}>
                <h2>Custom Paging</h2>
                <Slider {...settings}>
                    <div>
                        <span>1</span>
                    </div>
                    <div>
                        <span>2</span>
                    </div>
                    <div>
                        <span>3</span>
                    </div>
                    <div>
                        <span>4</span>
                    </div>
                </Slider>
            </main>
        </div>
    );
};

export default Home;
