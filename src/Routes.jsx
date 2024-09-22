import App from "./App";
import About from "./routes/About";
import Home from "./routes/Home";

const Routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error occured",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default Routes;
