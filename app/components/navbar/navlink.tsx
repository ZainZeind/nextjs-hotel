"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";

const Navlink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-slate-600 rounded-md md:hidden hover:bg-stone-100 transition-colors"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div className={clsx("w-full md:block md:w-auto transition-all duration-300 ease-in-out", { hidden: !open })}>
        <ul className="flex flex-col font-medium text-sm tracking-wide uppercase p-4 mt-4 rounded-lg bg-stone-50 md:flex-row md:items-center md:space-x-8 md:p-0 md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/myreservation"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              My Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/admin/dashboard"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/room"
              className="block py-2 px-3 text-slate-700 hover:text-amber-600 transition-colors duration-300"
            >
              Manage Room
            </Link>
          </li>
          <li className="pt-4 md:pt-0">
            <Link
              href="/signin"
              className="block text-center py-2.5 px-6 bg-slate-900 text-white hover:bg-amber-600 rounded-none transition-all duration-300 shadow-md hover:shadow-lg uppercase text-xs font-bold tracking-wider"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
