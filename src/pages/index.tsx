import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "./components/Header";
import Navigation from "../components/Navigation";
import Tabs from "./components/Tabs";

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
    {
        id: 5,
        label: "Extrato Cinco",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
    {
        id: 6,
        label: "Extrato Seis",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
    {
        id: 7,
        label: "Extrato Sete",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
    {
        id: 8,
        label: "Extrato Oito",
        docs: [
            { id: 1, type: "Rendimento", label: "Rendimento" },
            { id: 2, type: "Extrato", label: "Extrato" },
            { id: 3, type: "Extrato 2", label: "Extrato 2" },
        ],
    },
];

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <main className={styles.slider}>
                <h2>Custom Paging</h2>
                <Tabs data={tabs} horizontalScroll={true} />
            </main>
        </div>
    );
};

export default Home;
