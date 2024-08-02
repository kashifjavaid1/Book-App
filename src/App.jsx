import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Layout from "./Layout";
import Course from "./component/course/Course";
import Contect from "./component/contect/Contect";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<Course />} />
        <Route path="/contact" element={<Contect />} />
      </Route>
    </Routes>
  );
}
