import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, username, password);
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
            SIGN UP
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
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
                htmlFor="username"
                className="text-sm font-medium text-cyan-400 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-purple-400 rounded-md bg-transparent text-cyan-200 focus:outline-none focus:ring"
                placeholder="johndoe"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              Sign Up
            </button>
          </form>
          <div className="text-center text-cyan-200">
            Already a Registered User?{" "}
            <Link to={"/login"} className="text-fuchsia-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
