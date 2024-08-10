import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [user, setUser] = useAuth();
  const navigate = useNavigate();

  const LogoutHandle = () => {
    try {
      setUser({
        ...user,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Successfully Logout!");
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="">
      <button
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={LogoutHandle}
      >
        Logout
      </button>
    </div>
  );
}
