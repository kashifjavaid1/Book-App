import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Layout from "./Layout";
import Course from "./component/course/Course";
import Contect from "./component/contect/Contect";
import LoginIn from "./component/login/Login";
import SignIn from "./component/login/Sigin";

export default function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/login" element={<LoginIn />} />
          <Route path="/siginIn" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}
