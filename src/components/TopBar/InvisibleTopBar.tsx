import { FaBars } from "react-icons/fa";

export default function InvisibleTopBar() {
  return (
    <div>
      <div
        className="w-full h-14 lg:h-16 flex items-center justify-between px-4 lg:px-8
      fixed bg-sky-600"
      >
        <img src="./only-special-logo.svg" alt="logo" className="w-4 h-4" />
        <FaBars
          className="w-8 h-8 transition md:hidden
        text-zinc-100 hover:text-zinc-300"
        />
      </div>
    </div>
  );
}
