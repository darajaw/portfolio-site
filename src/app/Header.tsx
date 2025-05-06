"use client";
import ScrollSpy from "react-scrollspy-navigation";

export default function Header() {
  return (
    <header className="pb-2 pt-4 w-full top-0 fixed bg-[#20283A] z-[100]">
      <div className="flex justify-between px-20 py-3 relative">
        <div className="flex flex-col items-center justify-center leading-none">
          <h2 className="tracking-[0.2em] m-0 p-0">DARAJA</h2>
          <h3 className="tracking-[0.2em] m-0 p-0">WILLIAMS</h3>
        </div>

        <ScrollSpy activeClass="active" offsetTop={150}>
          <nav className="flex justify-between gap-8 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            <a className="group flex items-center" href="#about">
              <span className="text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-[.active]:text-purple-200">
                About
              </span>
            </a>
            <a className="group flex items-center" href="#education">
              <span className="text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-[.active]:text-purple-200">
                Education
              </span>
            </a>
            <a className="group flex items-center" href="#skill">
              <span className="text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-[.active]:text-purple-200">
                Skills
              </span>
            </a>
            <a className="group flex items-center" href="#projects">
              <span className="text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-[.active]:text-purple-200">
                Projects
              </span>
            </a>
            <a className="group flex items-center" href="#hobbies">
              <span className="text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-[.active]:text-purple-200">
                Hobbies
              </span>
            </a>
          </nav>
        </ScrollSpy>

        <ul className="flex gap-3 items-center">
          <li>
            <a
              href="https://github.com/darajaw"
              className=" opacity-80 hover:opacity-100"
            >
              <svg className="w-10 h-10" viewBox="0 0 20 20">
                <path
                  className="fill-black dark:fill-white"
                  d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daraja-williams/"
              className="opacity-80 hover:opacity-100"
            >
              <svg className="w-10 h-10" viewBox="1 0 47 47">
                <path
                  className="fill-black dark:fill-white"
                  d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
