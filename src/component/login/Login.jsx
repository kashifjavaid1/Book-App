import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import API_ROUTE from "../../../config";

const LoginIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfor = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(`${API_ROUTE}/users/login`, userInfor);
      if (res.data) {
        alert("User successfully login up");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Error during sign-in:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden relative">
      {/* Sign-in form */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-96 transform transition-all duration-500 ease-in-out hover:scale-105">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {[
            {
              type: "email",
              placeholder: "Email",
              name: "email",
              icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            },

            {
              type: "password",
              placeholder: "Password",
              name: "password",
              icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            },
          ].map((input, index) => (
            <div
              key={input.type}
              className="relative animate-slideInFromLeft"
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <input
                type={input.type}
                placeholder={input.placeholder}
                {...register(input.name)}
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute top-3.5 left-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={input.icon}
                />
              </svg>
            </div>
          ))}
          <button
            className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            LogIn
          </button>

          <span className="flex">
            <h1 className="text-white">Don't have an account?</h1>
            <Link to="/siginIn">
              <span className="hover:underline mx-3 hover:text-pink-800 cursor-pointer">
                SigIn
              </span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginIn;
