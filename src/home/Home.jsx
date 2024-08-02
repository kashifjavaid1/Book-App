import Banner from "../component/banner/Banner";
import Footer from "../component/footer/Footer";
import FreeBook from "../component/freeBook/FreeBook";
import Navbar from "../component/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}
