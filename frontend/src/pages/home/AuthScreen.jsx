import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="hero-bg relative bg-cover">
      <header className="max-w-7xl mx-auto flex items-center justify-between p-4 pb-10">
        <img
          src="/rewind-logo.png"
          alt="Rewind Logo"
          className="w-40 md:w-52"
        />
        <Link
          to={"/login"}
          className="bg-fuchsia-500 text-cyan-200 rounded hover:bg-fuchsia-700 py-1 px-2"
        >
          Sign In
        </Link>
      </header>

      <div className="flex items-center flex-col justify-center max-w-7xl mx-auto text-center py-40 text-cyan-300">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-1/2">
          <input
            type="email"
            className="p-2 rounded flex-1 border border-purple-400  text-cyan-200 bg-black/80"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center bg-fuchsia-500 text-cyan-200 hover:bg-fuchsia-700">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>
      <div className="h-2 w-full bg-purple-600" aria-hidden="true" />
    </div>
  );
};

export default AuthScreen;
