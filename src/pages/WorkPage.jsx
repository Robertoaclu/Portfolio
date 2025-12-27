import { Link } from "react-router-dom";

export default function WorkPage() {
    return (
        <section>
            <h1>Work</h1>

            <ul>
                <li>
                    <Link to="/work/fashion">Demo — Tienda de ropa</Link>
                </li>
                <li>
                    <Link to="/work/photo">Demo — Fotógrafo</Link>
                </li>
                <li>
                    <Link to="/work/restaurant-a">Demo — Restaurante moderno A</Link>
                </li>
                <li>
                    <Link to="/work/restaurant-b">Demo — Restaurante moderno B</Link>
                </li>
            </ul>
        </section>
    );
}
