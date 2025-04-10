import Image from "next/image";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[30%] lg:flex-col lg:justify-between">
      <div className="lg:pt-8">
        <h1>Daraja Williams</h1>

        <p className="mb-4">Full Stack Developer</p>

        <nav className="gap-1 mb-1">
          <a className="group flex items-center active" href="#about">
            <span className="nav-indicator mr-1 h-[2px] w-2 bg-slate-200 transition-all group-hover:w-4  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
          <a className="group flex items-center active" href="#resume">
            <span className="nav-indicator mr-1 h-[2px] w-2 bg-slate-200 transition-all group-hover:w-4  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-focus-visible:text-slate-200">
              Resume
            </span>
          </a>
          <a className="group flex items-center active" href="#projects">
            <span className="nav-indicator mr-1 h-[2px] w-2 bg-slate-200 transition-all group-hover:w-4  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
          <a className="group flex items-center active" href="#hobbies">
            <span className="nav-indicator mr-1 h-[2px] w-2 bg-slate-200 transition-all group-hover:w-4  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-200 group-focus-visible:text-slate-200">
              Hobbies
            </span>
          </a>
        </nav>

        <hr></hr>

        <ul className="flex justify-center mt-1 gap-2">
          <li>
            <a href="https://github.com/darajaw">
              <Image
                src="github_dark.svg"
                alt="Github Logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daraja-williams/">
              <Image
                src="linkedin_dark.svg"
                alt="LinkedIn Logo"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
