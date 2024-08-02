import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const navbarHiden =
    location.pathname === "/login" || location.pathname === "/siginIn";

  return (
    <>
      {!navbarHiden && <Navbar />}
      <main>
        <Outlet />
        {!navbarHiden && <Footer />}
      </main>
    </>
  );
}
