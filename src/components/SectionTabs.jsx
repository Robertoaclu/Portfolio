import "../styles/sectionTabs.css";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const MotionDiv = motion.div

export default function SectionTabs({ tabs }) {
    const keys = useMemo(() => tabs.map((t) => t.key), [tabs]);
    const [active, setActive] = useState(keys[0]);

    const current = tabs.find((t) => t.key === active);

    return (
        <div className="sectionTabs">
            <div className="sectionTabsBar" role="tablist" aria-label="Section tabs">
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        type="button"
                        role="tab"
                        aria-selected={t.key === active}
                        onClick={() => setActive(t.key)}
                        className={`sectionTab ${t.key === active ? "isActive" : ""}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <MotionDiv
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="sectionTabsPanel"
                >
                    {current?.content}
                </MotionDiv>
            </AnimatePresence>
        </div>
    );

}
