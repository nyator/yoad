import React from "react";

import Nav from "../components/Nav";
import { FaPaste } from "react-icons/fa6";
import { RiLinkM } from "react-icons/ri";

const HomePage = () => {
  return (
    <>
    <div>
      
    </div>
      <div class="relative flex h-[80px] w-full min-w-[200px] max-w-[50rem] shadow-[rgba(106,_65,_210,_0.1)_0px_9px_30px]">
        <button
          class="absolute right-4 top-3 z-10 select-none rounded-r-2xl bg-purple-900 p-4 text-center align-middle"
          type="button"
          data-ripple-light="true"
        >
          <FaPaste className="bg-transparent size-5" />
        </button>
        <input
          type="email"
          class="h-full w-full rounded-2xl border-none bg-black/30 px-10 py-2.5 pr-12 text-sm font-bold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500"
          placeholder="Paste URL"
          required
        />
        <RiLinkM className="absolute size-5 left-3 top-[30px] bg-transparent text-purple-900" />
      </div>
    </>
  );
};

export default HomePage;
