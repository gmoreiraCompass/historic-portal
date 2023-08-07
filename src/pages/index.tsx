import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <h1>Olá Mundo</h1>
        </div>
    );
};

export default Home;
