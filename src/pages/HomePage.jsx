import SectionTabs from "../components/SectionTabs";

export default function HomePage() {
    const tabs = [
        {
            key: "about",
            label: "About",
            content: (
                <>
                    <h2 style={{ margin: 0 }}>Sobre mí</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                        Desarrollador Frontend enfocado en UI/UX. Este portfolio está construido en React + Vite
                        como proyecto y guía de repaso, con demos integradas.
                    </p>
                </>
            ),
        },
        {
            key: "skills",
            label: "Skills",
            content: (
                <>
                    <h2 style={{ margin: 0 }}>Skills</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                        React, UI Engineering, responsive design, accesibilidad, performance, diseño de sistemas.
                    </p>
                </>
            ),
        },
        {
            key: "projects",
            label: "Projects",
            content: (
                <>
                    <h2 style={{ margin: 0 }}>Proyectos</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                        Revisa la pestaña Work para entrar en las demos (ropa, fotógrafo y 2 conceptos de restaurante moderno).
                    </p>
                </>
            ),
        },
        {
            key: "contact",
            label: "Contact",
            content: (
                <>
                    <h2 style={{ margin: 0 }}>Contacto</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                        Aquí pondremos email, GitHub, LinkedIn y un formulario (más adelante).
                    </p>
                </>
            ),
        },
    ];

    return (
        <section style={{ display: "grid", gap: 18 }}>
            {/* HERO */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "96px 1fr",
                    gap: 16,
                    alignItems: "center",
                    padding: 18,
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--border)",
                    background: "var(--panel)",
                    boxShadow: "var(--shadow)",
                }}
            >
                <div
                    style={{
                        width: 96,
                        height: 96,
                        borderRadius: 24,
                        border: "1px solid var(--border)",
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        color: "var(--text)",
                    }}
                    aria-label="Avatar"
                    title="Avatar"
                >
                    R
                </div>

                <div>
                    <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5 }}>
                        Roberto — Frontend Developer
                    </h1>
                    <p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: 1.6 }}>
                        Minimal, elegante y oscuro. Tabs por secciones + animaciones suaves. Demos integradas en una única app.
                    </p>
                </div>
            </div>

            {/* TABS DE SECCIONES */}
            <SectionTabs tabs={tabs} />
        </section>
    );
}
