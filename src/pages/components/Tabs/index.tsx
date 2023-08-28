import { useEffect, useRef, useState } from "react";
import { TabsProps } from "../../../types/Tabs";
import styles from "./styles.module.css";

interface IProps {
    horizontalScroll?: boolean;
}

const Tabs = ({ data: tabs, horizontalScroll }: TabsProps & IProps) => {
    const [activeTab, setActiveTab] = useState("");
    const navRef = useRef<HTMLDivElement>(null);
    const tagRefs = useRef<HTMLSpanElement[]>([]);

    function scrollNav() {
        const observer = new IntersectionObserver((entries) => {
            console.log("###", entries);
        });

        tagRefs.current.map((entry) => {
            observer.observe(entry);
            observer.takeRecords();

            console.log("###", entry.nextSibling);
        });
    }

    useEffect(() => {
        const tabID = String(tabs[0].id);
        setActiveTab(tabID);
    }, [tabs]);

    return (
        <div className={styles.tabs}>
            {horizontalScroll && <button onClick={scrollNav}>{">"}</button>}
            <div className={styles.tabNav} ref={navRef}>
                {tabs.map((tab, idx) => {
                    return (
                        <span
                            key={tab.id}
                            onClick={() => setActiveTab(`${tab.id}`)}
                            ref={(el) =>
                                el ? (tagRefs.current[idx] = el) : null
                            }
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
