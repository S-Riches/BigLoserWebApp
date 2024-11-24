import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import LossGoal from "./Views/LossGoal";
import TrackPage from "./Views/TrackPage";
import "./styles/globals.css";

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
    {
      path: "/track",
      element: <TrackPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
