import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Navigation from "../components/Navigation";
import styles from  '../../styles/Home.module.css'
import { Header } from "./components/Header";
import { Profile } from "./components/ProfileComponent";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <h1>Olá Mundo</h1>
            <Header/>
        </div>
    );
};

export default Home;
