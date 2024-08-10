import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Layout from "./Layout";
import Course from "./component/course/Course";
import Contect from "./component/contect/Contect";
import LoginIn from "./component/login/Login";
import SignIn from "./component/login/Sigin";
import { useAuth } from "./component/context/AuthProvider";

export default function App() {
  const [user, setUser] = useAuth();
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/login" element={<LoginIn />} />
        <Route path="/signin" element={<SignIn />} />
        {user ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="contact" element={<Contect />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}
