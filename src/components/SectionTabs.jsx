import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const MotionDiv = motion.div;

export default function SectionTabs({ tabs }) {
    const keys = useMemo(() => tabs.map((t) => t.key), [tabs]);
    const [active, setActive] = useState(keys[0]);

    const current = tabs.find((t) => t.key === active);

    return (
        <div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        style={{
                            borderRadius: 999,
                            padding: "10px 12px",
                            border: t.key === active ? "1px solid var(--border)" : "1px solid transparent",
                            background: t.key === active ? "var(--panel-2)" : "transparent",
                            color: t.key === active ? "var(--text)" : "var(--muted)",
                            cursor: "pointer",
                            transition: "transform 160ms ease, background 160ms ease, border-color 160ms ease, color 160ms ease",
                        }}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: 16 }}>
                <AnimatePresence mode="wait">
                    <MotionDiv
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        style={{
                            padding: 18,
                            borderRadius: "var(--radius)",
                            border: "1px solid var(--border)",
                            background: "var(--panel)",
                            boxShadow: "var(--shadow)",
                        }}
                    >
                        {current?.content}
                    </MotionDiv>
                </AnimatePresence>
            </div>
        </div>
    );
}
