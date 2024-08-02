import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden relative">
      {/* Sign-in form */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-96 transform transition-all duration-500 ease-in-out hover:scale-105">
        <form className="space-y-6">
          {[
            {
              type: "email",
              placeholder: "Email",
              icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            },
            {
              type: "text",
              placeholder: "Username",
              icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
            },
            {
              type: "password",
              placeholder: "Password",
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
            Sign In
          </button>
          <span className="flex">
            <h1 className="text-white"> Do you have a account?</h1>
            <Link to="/login">
              <span className="hover:underline mx-3 hover:text-pink-800 cursor-pointer">
                Login
              </span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
