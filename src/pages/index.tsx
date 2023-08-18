import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Header from "./components/Header";
import BanckStatement from "./components/BankStatement";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Navigation />
            <BanckStatement/>
        </div>
    );
};

export default Home;
