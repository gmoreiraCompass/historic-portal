import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "./components/Header";
import Slider from "react-slick";
import Navigation from "../components/Navigation";
import CustonmPaging from "./components/CustomPaging";


const Home: NextPage = () => {
        
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <CustonmPaging/>
        </div>
    );
};

export default Home;
