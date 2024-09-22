import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Bottom from "./components/Bottom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Bottom />
    </>
  );
}

export default App;
