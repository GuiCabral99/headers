import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SimpleTopBar() {
  return (
    <div>
      <div className="w-full py-8 lg:py-12 px-8 lg:px-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <img src="./only-special-logo.svg" alt="logo" className="w-10" />
          <h1 className="text-3xl font-semibold">Company</h1>
        </div>
        <div className="flex space-x-4 md:space-x-8 items-center">
          <Link href="/">
            <FaFacebook className="w-10 h-10 bg-transparent text-zinc-100 hover:text-zinc-300 transition" />
          </Link>
          <Link href="/">
            <FaInstagram className="w-10 h-10 text-zinc-100 hover:text-zinc-300 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}
