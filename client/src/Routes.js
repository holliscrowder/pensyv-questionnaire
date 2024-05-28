import App from "./App";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Survey from "./pages/Survey";
import Leave from "./pages/Leave";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/survey",
        element: <Survey />,
      },
      {
        path: "/leave",
        element: <Leave />,
      },
    ],
  },
];
export default routes;
