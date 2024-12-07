import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/esoko-logo.png";
import loginBg from "../../assets/images/login-bg.webp";

const demoCredentials = {
  email: "demo@example.com",
  password: "Demo123!",
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo purposes, we'll just check against demo credentials
    if (
      formData.email === demoCredentials.email &&
      formData.password === demoCredentials.password
    ) {
      login({
        name: "Demo User",
        email: demoCredentials.email,
      });
      navigate("/");
    } else {
      alert(
        "Invalid credentials. Please try the demo credentials shown below."
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const useDemoCredentials = () => {
    setFormData(demoCredentials);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 bg-center bg-cover py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="max-w-md w-full space-y-8 bg-gray-100 p-8 rounded-xl shadow-lg">
        <div>
          <div className=" w-full">
            <img src={logo} alt="eSoko Logo" className="w-20 h-20 mx-auto" />
            <h2 className="text-center text-lg font-extrabold text-brand-primary">
              eSoko Fashion Store
            </h2>
          </div>
          <h2 className=" text-center text-4xl font-extrabold text-gray-400">
            Sign in to your account
          </h2>
          <p className="mt-3 text-center text-sm font-semibold text-gray-500">
            Or{" "}
            <Link
              to="/signup"
              className="font-semibold text-orange-600 hover:text-orange-500"
            >
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-300 placeholder-gray-500 text-gray-600 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-300 placeholder-gray-500 text-gray-600 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={useDemoCredentials}
              className="text-sm text-orange-600 hover:text-orange-500"
            >
              Use demo credentials
            </button>
            <div className="mt-2 text-xs text-gray-500">
              Demo Email: {demoCredentials.email}
              <br />
              Demo Password: {demoCredentials.password}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
