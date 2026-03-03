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
          className="hover:bg-cyan-500 hover:text-fuchsia-700 rounded bg-violet-700 text-cyan-300 py-1 px-2"
        >
          Sign In
        </Link>
      </header>

      <div className="flex items-center flex-col justify-center max-w-7xl mx-auto text-center py-40 text-slate-300">
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
            className="p-2 rounded flex-1 border border-purple-400  text-purple-400 bg-black/80"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center bg-violet-700 text-teal-300 hover:text-fuchsia-700 hover:bg-cyan-500">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/*separator*/}
      <div className="h-2 w-full bg-purple-600" aria-hidden="true" />

      {/*1st section*/}
      <div className="py-10 bg-black">
        <div className="flex max-w-7xl mx-auto items-center justify center md:flex-row flex-col px-4 md:px-2">
          {/*left side*/}

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4  text-fuchsia-400">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl text-slate-300">
              Watch on Smart TVs, Playstation, XBox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          {/*right side*/}

          <div className="flex-1 relative">
            <img src="/tv.png" alt="TV image" className="mt-4 z-20 relative" />
            <video
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/*separator*/}
      <div className="h-2 w-full bg-purple-600" aria-hidden="true" />

      {/*2nd section*/}
      <div className="py-10 bg-black">
        <div className="flex max-w-7xl mx-auto items-center justify center md:flex-row flex-col-reverse px-4 md:px-2">
          {/*left side*/}
          <div className="flex-1 relative">
            <img
              src="/device-pile.png"
              alt="Device pile image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute max-w-[63%] left-1/2 top-8 -translate-x-1/2 h-4/6 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>

          {/*right side*/}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4  text-fuchsia-400">
              Watch Everywhere
            </h2>
            <p className="text-lg md:text-xl text-slate-300">
              Stream Unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
      </div>

      {/*separator*/}
      <div className="h-2 w-full bg-purple-600" aria-hidden="true" />

      {/*3rd section*/}
      
    </div>
  );
};

export default AuthScreen;
