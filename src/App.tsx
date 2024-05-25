import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import LossGoal from "./Views/LossGoal";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/loss-goal",
            element: <LossGoal />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
