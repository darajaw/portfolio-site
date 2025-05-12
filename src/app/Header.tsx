"use client";
import ScrollSpy from "react-scrollspy-navigation";

export default function Header() {
  const sunIcon = `
    <svg class="h-10 w-10" viewBox="0 0 24 24">
      <g class="fill-white">
        <path d="M11 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1Z" />
        <path
          class="fill-white"
          d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-9.938 0a3.938 3.938 0 1 0 7.876 0 3.938 3.938 0 0 0-7.876 0Z"
        />
        <path d="M20.485 3.515a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414ZM1 13a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H1ZM3.515 3.515a1 1 0 0 0 0 1.414l1.414 1.414A1 1 0 0 0 6.343 4.93L4.93 3.515a1 1 0 0 0-1.414 0ZM11 21a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2ZM6.343 17.657a1 1 0 0 0-1.414 0L3.515 19.07a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414ZM21 13a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2h-2ZM17.657 17.657a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z" />
      </g>
    </svg>
    `;

  const moonIcon = `<svg class="h-10 w-10" viewBox="0 0 24 24">
                <path d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432c.125.049.223.148.272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z" />
                <path
                  class="fill-black"
                  d="m21.067 11.857-.642-.388.642.388Zm-8.924-8.924-.388-.642.388.642ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137-.438-.059-.995.103-1.299.606l1.284.776Z"
                />
              </svg>`;

  const modeToggle = () => {
    const htmlTag = document.querySelector("html");
    const modeBtn = document.querySelector("#modeBtn");
    if (htmlTag) {
      if (htmlTag.classList.contains("dark")) {
        htmlTag.classList.remove("dark");
        localStorage.setItem("theme", "light");
        modeBtn.innerHTML = moonIcon;
      } else {
        htmlTag.classList.add("dark");
        localStorage.setItem("theme", "dark");
        modeBtn.innerHTML = sunIcon;
      }
    }
  };

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
          <li>
            <button id="modeBtn" onClick={modeToggle}>
            <svg className="h-10 w-10" viewBox="0 0 24 24">
                <path d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432c.125.049.223.148.272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z" />
                <path
                  className="fill-black"
                  d="m21.067 11.857-.642-.388.642.388Zm-8.924-8.924-.388-.642.388.642ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137-.438-.059-.995.103-1.299.606l1.284.776Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
