"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export default function StandardTopBar() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`w-full h-14 lg:h-16 flex items-center justify-between px-4 lg:px-8 transition duration-200
        ${menu ? "-translate-y-full md:translate-y-0" : "translate-y-0"}
      fixed bg-zinc-900`}
      >
        <Link href="/" className="flex items-center space-x-2 lg:space-x-4">
          <img src="/only-special-logo.svg" alt="logo" className="w-6 lg:w-8" />
          <h2 className="text-xl font-semibold">Company</h2>
        </Link>
        <FaBars
          className="w-8 h-8 transition cursor-pointer md:hidden
        text-zinc-100 hover:text-zinc-300"
          onClick={() => setMenu(!menu)}
        />
      </div>

      <div className="h-16 bg-skin-bg-primary"></div>

      <span
        className={
          menu ? "fixed inset-0 bg-black opacity-80 md:hidden" : "hidden"
        }
        onClick={() => {
          setMenu(false);
        }}
      ></span>

      <aside
        className={`fixed top-0 right-0 h-full w-[320px] px-4 bg-zinc-900 border-l transition duration-500 md:bg-transparent md:border-0 md:right-4 lg:right-8 ${
          menu ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mx-4 py-8 md:hidden">
          <div className="flex items-center space-x-2">
            <img src="/only-special-logo.svg" alt="logo" className="w-6" />
            <h4 className="text-sm font-light">Slogan</h4>
          </div>
          <FaTimes
            className="cursor-pointer w-8 h-8"
            onClick={() => setMenu(false)}
          />
        </div>
        <nav className="flex flex-col md:flex-row">
          <Link
            href="#"
            className="flex items-center text-xl font-semibold h-14 lg:h-16 px-4 border-b hover:bg-zinc-700 md:border-0"
          >
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center text-xl font-semibold h-14 lg:h-16 px-4 border-b hover:bg-zinc-700 md:border-0"
          >
            Serviços
          </Link>
          <Link
            href="#"
            className="flex items-center text-xl font-semibold h-14 lg:h-16 px-4 border-b hover:bg-zinc-700 md:border-0"
          >
            Contato
          </Link>
        </nav>
        <section className="mx-4 py-8 space-y-4 md:hidden">
          <h2 className="text-xl font-semibold">Redes sociais:</h2>
          <div className="flex space-x-4">
            <Link href="/">
              <FaFacebookSquare className="w-12 h-12 hover:text-zinc-300 transition" />
            </Link>
            <Link href="/">
              <FaInstagramSquare className="w-12 h-12 hover:text-zinc-300 transition" />
            </Link>
            <Link href="/">
              <FaYoutubeSquare className="w-12 h-12 hover:text-zinc-300 transition" />
            </Link>
          </div>
        </section>
      </aside>
    </div>
  );
}
