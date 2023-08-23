import { useEffect, useState } from "react";
import { TabsProps } from "../../../types/Tabs";
import styles from "./styles.module.css";

interface IProps {
    horizontalScroll?: boolean;
}

const Tabs = ({ data: tabs, horizontalScroll }: TabsProps & IProps) => {
    const [activeTab, setActiveTab] = useState("");

    function scrollNav() {
        scrollTo({
            behavior: "smooth",
            top: 1000,
        });
    }

    useEffect(() => {
        const tabID = String(tabs[0].id);
        setActiveTab(tabID);
    }, [tabs]);

    return (
        <div className={styles.tabs}>
            {horizontalScroll && <button onClick={scrollNav}>{">"}</button>}
            <div className={styles.tabNav}>
                {tabs.map((tab) => {
                    return (
                        <span
                            key={tab.id}
                            onClick={() => setActiveTab(`${tab.id}`)}
                        >
                            {tab.label}
                        </span>
                    );
                })}
            </div>
            <div>
                {tabs
                    .filter((tab) => activeTab === String(tab.id))
                    .map((item) => (
                        <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>
                    ))}
            </div>
        </div>
    );
};

export default Tabs;
