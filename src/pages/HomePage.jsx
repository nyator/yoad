import React, { useState } from "react";

import Nav from "../components/Nav";
import { FaPaste } from "react-icons/fa6";
import { RiLinkM } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";

const HomePage = () => {
  const [clipboardText, setClipboardText] = useState("");

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setClipboardText(text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5 items-center">
          <div className="text-center leading-[70px]">
            <h1 className="font-black text-[70px]">Yoad Video</h1>
            <h1 className="font-medium text-4xl">
              Down<span className="text-purple-900">loader</span>.
            </h1>
          </div>
          <p className="text-gray-400 text-center max-w-[50rem] px-20">
            Try this unique tool for quick, hassle-free downloads from YouTube.
            Transform your offline video collection with this reliable and
            efficient downloader.
          </p>
          <div className="flex rounded-full bg-purple-400/10 text-[12px] font-bold text-gray-500 p-1 w-[500px] items-center justify-center gap-2">
            <div className="rounded-full bg-black text-gray-500 p-1">
              <MdElectricBolt className="bg-transparent text-yellow-500" />
            </div>
            WE DO NOT ALLOW/SUPPORT THE DOWNLOAD OF COPYRIGHTED MATERIAL!
          </div>
        </div>

        <div class="relative flex h-[80px] w-full min-w-[200px] max-w-[50rem] shadow-[rgba(106,_65,_210,_0.1)_0px_9px_30px]">
          <button
            class="absolute right-4 top-3 z-10 select-none rounded-r-2xl bg-purple-900 p-4 text-center align-middle"
            type="button"
            onClick={handlePasteClick}
            data-ripple-light="true"
          >
            <FaPaste className="bg-transparent size-5" />
          </button>
          <input
            type="text"
            class="h-full w-full rounded-2xl border-none bg-black/30 px-10 py-2.5 pr-20 text-sm font-bold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500"
            placeholder="https://www.youtube.com/..."
            // placeholder="Paste URL"
            value={clipboardText}
            onChange={(e) => setClipboardText(e.target.value)}
            required
          />
          <RiLinkM className="absolute size-5 left-3 top-[30px] bg-transparent text-purple-900" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
