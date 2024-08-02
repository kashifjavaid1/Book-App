import Navbar from "./component/navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}
