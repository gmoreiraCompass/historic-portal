import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Header from "./components/Header";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Navigation />
            <h1>Olá Mundo</h1>
        </div>
    );
};

export default Home;
