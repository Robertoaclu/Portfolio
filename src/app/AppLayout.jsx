import { NavLink, Outlet } from "react-router-dom";
import "../styles/app.css";

export default function AppLayout() {
    return (
        <div className="app">
            <header className="topbar">
                <div className="brand">Portfolio</div>

                <nav className="tabs">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive ? "tab active" : "tab")}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/work"
                        className={({ isActive }) => (isActive ? "tab active" : "tab")}
                    >
                        Work
                    </NavLink>
                </nav>
            </header>

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}
