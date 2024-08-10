import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import API_ROUTE from "../../../config";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    .required("Password is required"),
});

const LoginIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [, setUser] = useAuth();

  const onSubmit = async (data) => {
    const userInfor = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios?.post(`${API_ROUTE}/users/login`, userInfor);
      if (res?.data) {
        toast.success("Successfully logged in!");

        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res?.data?.user);
        reset();
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data.message || error?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden relative">
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
                className={`w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 ${
                  errors[input.name] ? "border-red-500" : ""
                }`}
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
              {errors[input.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[input.name]?.message}
                </p>
              )}
            </div>
          ))}
          <button
            className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105 animate-fadeIn hover:text-white"
            style={{ animationDelay: "0.8s" }}
            type="submit"
          >
            LogIn
          </button>

          <span className="flex">
            <h1 className="text-white hover:text-black cursor-pointer">
              Don't have an account?
            </h1>
            <Link to="/siginIn">
              <span className="hover:underline mx-3 hover:text-pink-800 cursor-pointer">
                SignIn
              </span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginIn;
