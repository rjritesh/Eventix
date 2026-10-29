import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailId.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }

    if (!isLogin && !name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (isLogin) {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:2000/api/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            emailId,
            password,
          }),
        });
        const data = await response.json();

        if (!res.ok) {
          throw new Error(data.message || "Login failed");
        }
        navigate("/");
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    } else {
      // Signup logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080B14] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[#252B3B] bg-[#111625] p-8 shadow-2xl">
        <h1 className=" text-center text-3xl  font-bold tracking-tight text-(--text-primary)">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <p className="mb-8 text-center text-[#94A3B8]">
          Your next great experience starts here.
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#F8FAFC]"
              >
                Enter Your name
              </label>

              <input
                type="text"
                value={name}
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full rounded-lg border border-[#252B3B] bg-[#171D2E] px-4 py-3 text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition focus:border-[#7C3AED]"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          )}
          <div className="mb-5">
            <label
              htmlFor="emailId"
              className="mb-2 block text-sm font-medium text-[#F8FAFC]"
            >
              Email Address
            </label>

            <input
              type="email"
              value={emailId}
              id="emailId"
              name="emailId"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#252B3B] bg-[#171D2E] px-4 py-3 text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition focus:border-[#7C3AED]"
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
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
              value={password}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#252B3B] bg-[#171D2E] px-4 py-3 text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition focus:border-[#7C3AED]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#7C3AED] py-3 font-semibold text-white transition hover:bg-[#6D28D9] cursor-pointer"
          >
            {isLoading ? "Please wait..." : isLogin ? "Login" : "SignUp"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#94A3B8]">
          Don't have an account?{" "}
          <span
            className="font-semibold text-[#A78BFA] hover:text-[#7C3AED] cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            Sign up
          </span>
        </p>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
