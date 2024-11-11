import React from "react";
import { MdOutlineBookmark } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center text-center py-4">
        Have library access?
        <a href="#login-library" className="underline ml-1">
          Log in through your library
        </a>
      </div>

      <hr className="" />
      <div className="flex justify-between items-center px-4 py-1">
        <div className="flex flex-col gap-0.5">
          <img
            src="https://www.jstor.org/favicon.ico"
            alt="JSTOR Logo"
            className="logo"
          />
          <span className="text-red-800 text-lg font-semibold">JSTOR</span>
        </div>

        <div className="flex flex-col gap-2 whitespace-nowrap items-end">
          <div className="flex items-center gap-3">
            <button className="border border-gray-800 hover:border-red-800 text-sm font-medium hover:text-red-900 px-4 py-1.5">
              Register
            </button>
            <button className="bg-red-800 text-white hover:bg-white hover:text-red-900 text-sm font-medium hover:border px-4 py-1.5 border hover:border-red-900">
              Log in
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button className="flex gap-1 items-center font-semibold hover:underline hover:text-red-800 hover:font-semibold hover:bg-gray-300 py-1.5 px-4">
              Browse <HiChevronDown size={16} />
            </button>
            <button className="flex gap-1 items-center font-semibold hover:underline hover:text-red-800 hover:font-semibold hover:bg-gray-300 py-1.5 px-4">
              <MdOutlineBookmark size={16} />
              Workspace
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
