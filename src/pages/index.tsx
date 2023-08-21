import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "./components/Header";
import Slider from "react-slick";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

const tabs2 = [
    "Extrato Consolidado",
    "Extrato Mensal  de Fundos de Investimento",
    "Extrato Mensal de Movimentações",
    "Extrato de Tarifas",
];

const tabs = [
    {
        id: 1,
        label: "Extrato Consolidado",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
    {
        id: 2,
        label: "Extrato Mensal  de Fundos de Investimento",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
    {
        id: 3,
        label: "Extrato Mensal de Movimentações",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
    {
        id: 4,
        label: "Extrato de Tarifas",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
];

const Tabs = ({ label, indexDots }: { label: typeof tabs; indexDots: any }) => {
    return (
        <a key={label[indexDots].id} className={styles.tabItem}>
            <span>{label[indexDots].label}</span>
        </a>
    );
};

const Home: NextPage = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // appendDots: (dots: [any]) => <nav className={styles.tabs}>{dots}</nav>,
        customPaging: (i: number) => <Tabs label={tabs} indexDots={i} />,
    };
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <main className={styles.slider}>
                <h2>Custom Paging</h2>
                <Slider {...settings}>
                    {tabs.map((tab) => {
                        return (
                            <div key={tab.id}>
                                <p>{tab.label}</p>
                                <pre>{JSON.stringify(tab.docs, null, 2)}</pre>
                            </div>
                        );
                    })}
                </Slider>
            </main>
        </div>
    );
};

export default Home;
