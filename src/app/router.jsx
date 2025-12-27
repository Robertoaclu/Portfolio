import { createHashRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";

import DemoFashion from "../pages/demos/DemoFashion";
import DemoPhoto from "../pages/demos/DemoPhoto";
import DemoRestaurantA from "../pages/demos/DemoRestaurantA";
import DemoRestaurantB from "../pages/demos/DemoRestaurantB";

export const router = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "work", element: <WorkPage /> },
            { path: "work/fashion", element: <DemoFashion /> },
            { path: "work/photo", element: <DemoPhoto /> },
            { path: "work/restaurant-a", element: <DemoRestaurantA /> },
            { path: "work/restaurant-b", element: <DemoRestaurantB /> },
        ],
    },
]);
