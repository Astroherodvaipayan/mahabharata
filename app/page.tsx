"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Contact Us", href: "/contact" },
  { name: "textbook", href: "/partner-search" },
  { name: "self-learn", href: "/csr-chat" },
  { name: "mahabharta-mentor", href: "/chatbot" },
];

export default function Home() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div 
        className={`absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000 ${
          showBg ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: "url('/maha.jpg')" }}
      />
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-zinc-200 font-bold text-xl">
                Mahabharata
              </Link>
            </div>
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 hover:text-zinc-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Mahabharata
        </h1>

        <div className="w-full max-w-3xl px-4 mt-8 animate-fade-in">
          <div className="relative">
            <input
              type="text"
              disabled
              placeholder="Coming Soon..."
              className="w-full px-6 py-4 text-lg bg-zinc-800/50 rounded-xl border border-zinc-700/50 text-zinc-300 placeholder-zinc-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-6 h-6 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            {" "}
            <Link
              target="_blank"
              href="https://ved-ai.com"
              className="underline duration-500 hover:text-zinc-300"
            >
              Mahabharata
            </Link>{" "}
            Rediscovering the power of bharat
          </h2>
        </div>
      </div>
    </div>
  );
}
