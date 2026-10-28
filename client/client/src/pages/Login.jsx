
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080B14] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#252B3B] bg-[#111625] p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-[#7C3AED]">
          Eventix
        </h1>

        <h2 className="mb-2 text-center text-2xl font-semibold text-[#F8FAFC]">
          Welcome Back
        </h2>

        <p className="mb-8 text-center text-[#94A3B8]">
          Your next great experience starts here.
        </p>

        <form>
          <div className="mb-5">
            <label
              htmlFor="emailId"
              className="mb-2 block text-sm font-medium text-[#F8FAFC]"
            >
              Email Address
            </label>

            <input
              type="email"
              id="emailId"
              name="emailId"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#252B3B] bg-[#171D2E] px-4 py-3 text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition focus:border-[#7C3AED]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#F8FAFC]"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#252B3B] bg-[#171D2E] px-4 py-3 text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition focus:border-[#7C3AED]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#7C3AED] py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#94A3B8]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#A78BFA] hover:text-[#7C3AED]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
