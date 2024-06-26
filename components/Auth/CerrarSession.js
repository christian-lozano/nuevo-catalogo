"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function CerrarSession() {
  const { data: session } = useSession();
  return (
    <div>
      <div className="">
        <div className="w-full flex justify-center ">
          <span className="font-bold"> {session?.user?.name}</span>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="bg-black text-white font-bold px-6 text-xs 2xl:text-sm font-normal flex items-center justify-around py-2 mt-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-2 2xl:w-4 2xl:h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        <span className="ml-2">Cerrar Session</span>
      </button>
    </div>
  );
}
