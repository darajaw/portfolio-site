import Image from "next/image";

export default function Home() {
  return (
    <div className=" lg:w-[70%] pb-8 ">
      <main className="">
        <div id="about" className="mb-3 lg:pt-8">
          <h2 className="mb-1">Hi There!</h2>
          <p>
            Thank you for visiting my website. I am a Full Stack Developer with
            expertise in various technologies. Feel free to explore my skills,
            education, and hobbies through the navigation menu. As I continue to
            add new features to enhance this website, please feel free to send
            me your feedback!
          </p>
        </div>

        <section id="education" className="pt-2 group/list flex flex-col gap-2">
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Education</h2>
            <hr className="h-px" />
          </div>
        </section>

        <section id="projects" className="pt-2 group/list flex flex-col gap-2">
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Projects</h2>
            <hr className="h-px" />
          </div>

          <span className=" p-1 hover:outline-1 rounded-md hover:drop-shadow-lg hover:bg-slate-800 group">
            <a
              href="https://github.com/darajaw/Smart-Diary"
              className="flex flex-col md:flex-row"
            >
              <div className="md:basis-80">
                <p className="pb-1">Nov 2024 - Dec 2024 </p>
              </div>

              <div>
                <h3 className="group-hover:text-green-300">Smart Diary</h3>
                <p>
                  I developed a journaling website using SQL, PHP, HTML, CSS,
                  and JavaScript, enabling users to register accounts, search
                  for, and edit previous entries. Throughout the project, I
                  applied Agile principles such as iterative development and
                  collaboration to effectively design and implement both the
                  website and its supporting database. Additionally, I
                  coordinated the troubleshooting of various program bugs,
                  particularly those related to database connection issues.
                </p>
              </div>
            </a>
          </span>

          <span className=" p-1 hover:outline-1 rounded-md hover:drop-shadow-lg hover:bg-slate-800 group">
            <a
              href="https://github.com/darajaw/Screentime-Buddy"
              className="flex flex-col md:flex-row"
            >
              <div className="md:basis-80">
                <p className="pb-1">Nov 2024 - Dec 2024 </p>
              </div>

              <div>
                <h3 className="group-hover:text-green-300">Screentime Buddy</h3>
                <p>
                  I developed a conceptual version of an app that shares app
                  usage data between users, created in Android Studio using Java
                  for the 2024 Hack The Hill II Hackathon. As part of a
                  collaborative team of programmers, I contributed to the
                  design, testing, and implementation of the app’s core
                  functionalities. Additionally, I guided team members in
                  understanding Android development within a short timeframe to
                  ensure successful project completion.
                </p>
              </div>
            </a>
          </span>

          <span className=" p-1 hover:outline-1 rounded-md hover:drop-shadow-lg hover:bg-slate-800 group">
            <a
              href="https://github.com/darajaw/JavaPong"
              className="flex flex-col md:flex-row"
            >
              <div className="md:basis-80">
                <p className="pb-1">Nov 2024 - Dec 2024 </p>
              </div>

              <div>
                <h3 className="group-hover:text-green-300">Pong Game</h3>
                <p>
                  I created a Pong clone using Java Swing and AWT libraries,
                  applying object-oriented programming concepts such as
                  encapsulation and polymorphism to maintain clean and organized
                  code. To enhance the user experience and deepen my
                  understanding of the program’s structure, I implemented
                  additional features including dark mode and optional
                  background music.
                </p>
              </div>
            </a>
          </span>
        </section>

        {/** Skills Section */}
        <section id="skills" className="pt-2 group/list flex flex-col gap-2">
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Skills</h2>
            <hr className="h-px" />
          </div>

          <h3 className="text-center">Programming</h3>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex w-9 items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/java_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-4.5">Java</h4>
            </span>

            <span className="relative text-right flex w-11 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/python_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5">Python</h4>
            </span>

            <span className="relative text-right flex w-14 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/js_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5">JavaScript</h4>
            </span>
          </div>

          <h3 className="text-center pt-2">Web Development</h3>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex w-10 items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/react_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-4.5">React</h4>
            </span>

            <span className="relative text-right flex w-11 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-black"
                src="/skills/nextjs_light.svg"
                alt="The NextJS Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5">Next.js</h4>
            </span>

            <span className="relative text-right flex w-12 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/tailwind_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5">Tailwind</h4>
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex w-10 items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/html_dark.png"
                alt="The HTML Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-4.5">HTML</h4>
            </span>

            <span className="relative text-right flex w-10 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/php_dark.svg"
                alt="The PHP Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5.5">PHP</h4>
            </span>

            <span className="relative text-right flex w-10 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/css_dark.png"
                alt="The CSS Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5.5">CSS</h4>
            </span>
          </div>

          <h3 className="text-center pt-2">Database Management</h3>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex w-11 items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/mysql_dark.svg"
                alt="The MySQL Logo"
                width={65}
                height={65}
              />

              <h4 className="ml-4.5">MySQL</h4>
            </span>

            <span className="relative text-right flex w-11 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/oracle_dark.svg"
                alt="The Oracle Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5">Oracle</h4>
            </span>

            <span className="relative text-right flex w-15 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/postgresql_dark.svg"
                alt="The PostgreSQL Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5.5">PostgreSQL</h4>
            </span>
          </div>

          <h3 className="text-center pt-2">App Development</h3>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex w-17 items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/android_studio_dark.svg"
                alt="The Android Studio Logo"
                width={65}
                height={65}
              />

              <h4 className="ml-4.5">Android Studio</h4>
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex w-11 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/flutter_dark.svg"
                alt="The Flutter Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5">Flutter</h4>
            </span>

            <span className="relative text-right flex w-10 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/dart_dark.svg"
                alt="The Dart Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5.5">Dart</h4>
            </span>

            <span className="relative text-right flex w-11 items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/kotlin_dark.svg"
                alt="The Kotlin Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-5.5">Kotlin</h4>
            </span>
          </div>
        </section>

        {/** Hobbies Section */}
        <section
          id="hobbies"
          className="pt-4 group/list flex flex-col gap-2 md:pt-4"
        >
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Hobbies</h2>
            <hr className="h-px" />

            <ul className="flex justify-center my-1 flex-col md:gap-2 md:flex-row ">
              <li className="group flex flex-col items-center">
                <div className="transition-all w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8 bg-white dark:bg-black">
                  {/* SVG for Gaming Icon */}
                  <svg viewBox="0 0 1069 1069">
                    <path d="M1.397.592h1066.67v1066.67H1.397z" />
                    <path
                      className="fill-black dark:fill-white"
                      d="M434.469 693.912h200.523a186.116 186.116 0 0 0 85.747 109.508 186.168 186.168 0 0 0 141.267 18.598l.106-.029a186.165 186.165 0 0 0 131.64-228.007l-54.48-203.323a186.165 186.165 0 0 0-228.007-131.64l-.107.029a186.112 186.112 0 0 0-73.63 39.042c.013-.012-205.608-.012-205.608-.012a186.09 186.09 0 0 0-73.617-39.031l-.106-.028a186.168 186.168 0 0 0-228.007 131.64L75.709 593.982a186.168 186.168 0 0 0 131.64 228.007l.107.029a186.169 186.169 0 0 0 141.267-18.598 186.118 186.118 0 0 0 85.746-109.508Zm254.788-38.789c-7.111-24.401-29.867-23.713-30.333-23.711-125.182.391-248.387 0-248.387 0-16.192.388-27 11.117-30.332 23.711-2.122 8.02-3.362 12.53-4.992 18.63-2.627 9.835-2.635 9.833-.12.449a123.668 123.668 0 0 1-151.461 87.445l-.107-.028a123.664 123.664 0 0 1-87.445-151.461l54.48-203.323a123.669 123.669 0 0 1 151.46-87.446l.107.029a123.654 123.654 0 0 1 55.438 32.007 31.249 31.249 0 0 0 22.097 9.153h230.137a31.247 31.247 0 0 0 22.097-9.153 123.654 123.654 0 0 1 55.438-32.007l.107-.029a123.668 123.668 0 0 1 151.461 87.446l54.48 203.323a123.668 123.668 0 0 1-87.446 151.461l-.107.028a123.668 123.668 0 0 1-151.206-86.51l-5.366-20.014Zm-254.973 38.789h-.014l-.085.229-.654 1.495c.268-.564.52-1.139.753-1.724ZM284.731 460.784h-31.026c-17.247 0-31.25 14.003-31.25 31.25s14.003 31.25 31.25 31.25h31.026v31.026c0 17.247 14.002 31.25 31.25 31.25 17.247 0 31.25-14.003 31.25-31.25v-31.026h31.025c17.248 0 31.25-14.003 31.25-31.25s-14.002-31.25-31.25-31.25h-31.025v-31.026c0-17.247-14.003-31.25-31.25-31.25-17.248 0-31.25 14.003-31.25 31.25v31.026Z"
                    />
                    <path
                      className="fill-black dark:fill-white"
                      d="M720.632 552.486c0-18.253 14.819-33.073 33.073-33.073 18.254 0 33.073 14.82 33.073 33.073 0 18.254-14.819 33.074-33.073 33.074-18.254 0-33.073-14.82-33.073-33.074Zm93.525-93.525c18.254 0 33.074 14.819 33.074 33.073 0 18.254-14.82 33.073-33.074 33.073-18.253 0-33.073-14.819-33.073-33.073 0-18.254 14.82-33.073 33.073-33.073Zm-120.904 0c18.253 0 33.073 14.819 33.073 33.073 0 18.254-14.82 33.073-33.073 33.073-18.254 0-33.074-14.819-33.074-33.073 0-18.254 14.82-33.073 33.074-33.073Zm27.379-27.379c0-18.254 14.819-33.074 33.073-33.074 18.254 0 33.073 14.82 33.073 33.074 0 18.253-14.819 33.073-33.073 33.073-18.254 0-33.073-14.82-33.073-33.073Z"
                    />
                  </svg>
                </div>
                <h3 className="invisible group-hover:visible">Gaming</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="invisible group-hover:visible">Coding</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <svg viewBox="0 -2 32 32">
                    <path
                      className="fill-black dark:fill-white"
                      d="m30 26-6-5v-3l6-4v12ZM19 12.012A5.011 5.011 0 1 1 19 1.99a5.011 5.011 0 0 1 0 10.022ZM22 24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8ZM2 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm28 4-6 4a3.97 3.97 0 0 0-1.406-3.021C24.626 11.753 26 9.546 26 7a7 7 0 1 0-14 0c0 1.962.812 3.729 2.111 5h-3.668C11.4 10.937 12 9.544 12 8A6 6 0 0 0 0 8c0 1.809.816 3.41 2.082 4.511C.847 13.191 0 14.49 0 16v8a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-1l6 5a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"
                    />
                  </svg>
                </div>
                <h3 className="invisible group-hover:visible">Movies</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <svg
                    className="w-full h-full transform scale-140 group-hover:scale-[1.3]"
                    viewBox="0 0 64 64"
                  >
                    <g
                      stroke="#000"
                      strokeLinecap="round"
                      stroke-line-join="round"
                      strokeWidth="3"
                    >
                      <path
                        className="fill-black dark:fill-white"
                        d="M50.83 18.04h4.64v33.93H8.53V18.04h4.52"
                      />
                      <path
                        className="fill-black dark:fill-white"
                        d="M49.83 47V12c-13.57.44-17.89 6-17.89 6s-5.44-6.23-17.88-6v35a44.38 44.38 0 0 1 17.88 5s9.86-4.67 17.89-5ZM31.94 18.04v33.93"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="invisible group-hover:visible">Reading</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <svg viewBox="0 0 450.497 450.497">
                    <path
                      className="fill-black dark:fill-white"
                      d="M440.408 83.714c-6.508-6.508-15.172-10.093-24.396-10.093s-17.887 3.584-24.396 10.092l-23.334 23.334-21.211 21.211-.001.001-.001.001-151.614 151.616a7.52 7.52 0 0 0-.582.661c-.046.059-.088.12-.133.18-.136.183-.263.37-.381.562-.02.032-.045.062-.064.095l-44.172 75.021c-4.073 4.905-3.813 12.22.784 16.819 2.361 2.36 5.5 3.66 8.839 3.66 2.949 0 5.743-1.015 7.982-2.879l75.019-44.17c.036-.021.067-.048.102-.069.188-.115.371-.24.551-.373.062-.046.125-.088.185-.136.228-.18.45-.371.66-.581l151.613-151.613h.001l.001-.002 44.547-44.547c13.452-13.451 13.452-35.338.001-48.79zm-49.851 77.428-27.577-27.578 10.606-10.606 27.577 27.577-10.606 10.607zM238.943 312.756l-27.577-27.577 141.007-141.008 27.577 27.577-141.007 141.008zm-43.309 27.403-11.671-11.671 18.344-31.155 24.482 24.482-31.155 18.344zm-28.382 16.711 8.85-15.031 6.181 6.181-15.031 8.85zm262.549-234.972-18.031 18.031-27.577-27.577 18.031-18.031c3.676-3.675 8.572-5.699 13.789-5.699s10.113 2.024 13.788 5.699c3.676 3.675 5.699 8.572 5.699 13.789s-2.023 10.113-5.699 13.788zM109.164 356.375c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM58.582 356.375c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM8 356.375c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
                    />
                  </svg>
                </div>
                <h3 className="invisible group-hover:visible">Writing</h3>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
