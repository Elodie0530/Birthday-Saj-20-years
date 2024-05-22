import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { Footer, Footer2 } from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  const location = useLocation();

  // recup path actuelle // {...} -> "/credits"

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        {location.pathname === "/credits" ? <Footer2 /> : <Footer />}
        <ScrollTopButton/>
      </div>
    </>
  );
}

export default App;
