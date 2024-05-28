import App from "./App";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
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
        path: "/login",
        element: <Login />,
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
