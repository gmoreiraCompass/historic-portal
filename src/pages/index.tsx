import type { NextPage } from "next";
import styles from  '../../styles/Home.module.css'
import { Header } from "./components/Header";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <h1>Olá Mundo</h1>
        </div>
    );
};

export default Home;
