import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="h-screen w-full hero-bg bg-cover">
      <header className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/rewind-logo.png" alt="logo" className="w-52" />
        </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-fuchsia-500 text-2xl font-bold mb-4">
            LOGIN
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-cyan-400 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-purple-400 rounded-md bg-transparent text-cyan-200 focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-cyan-400 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-purple-400 rounded-md bg-transparent text-cyan-200 focus:outline-none focus:ring"
                placeholder="********"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full py-2 bg-fuchsia-500 text-cyan-200 font-semibold rounded-md hover:bg-fuchsia-700">
              Login
            </button>
          </form>
          <div className="text-center text-cyan-200">
            Don't have an account yet?{" "}
            <Link to={"/signup"} className="text-fuchsia-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
