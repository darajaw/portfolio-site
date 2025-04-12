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
            <hr className="h-px mb-4" />
          </div>

          <h3 className="text-center mb-4">Programming</h3>

          <div className="flex flex-col gap-10 items-center justify-center mb-5 md:flex-row md:gap-1">
            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <svg className="absolute -left-5 rounded-full shadow-lg bg-white w-20 h-20" viewBox="-102.4 -102.4 716.8 716.8">
                <path
                  className="fill-black bg-white"
                  d="M193.918 208.369c-4.729-10.456-6.849-22.652-3.236-33.731 3.612-11.327 11.703-20.413 19.794-28.878 22.525-22.531 50.285-39.085 72.316-61.986 12.197-12.573 22.278-27.634 25.762-44.937 2.864-12.695 1.496-25.764-1.117-38.337 11.7 13.319 15.559 32.363 12.197 49.541-3.608 19.292-14.316 36.344-26.886 51.031-10.081 11.827-21.659 22.282-33.731 31.993-14.065 11.327-27.88 23.524-36.716 39.457-7.472 12.943-9.215 28.876-4.11 42.942 8.341 24.146 27.756 42.071 38.338 64.848-11.703-10.332-23.152-21.036-33.86-32.361-11.198-11.95-21.78-24.644-28.751-39.582zm63.48-18.921c-2.115 19.792 8.213 38.462 20.539 53.151 5.972 6.596 11.076 14.687 11.323 23.899.251 12.318-6.716 23.774-15.684 31.861 2.119-.246 3.612-2.115 5.355-3.11 13.443-8.589 26.385-19.418 32.982-34.227 4.357-10.083 3.362-22.034-2.362-31.371-6.724-10.953-15.559-20.662-20.786-32.61-2.867-6.721-3.862-14.562-1.496-21.657 3.114-9.583 9.834-17.426 16.93-24.272 19.54-18.544 43.189-31.743 65.844-46.179-28.629 8.214-56.883 19.542-81.03 37.343-15.311 11.451-29.498 27.382-31.615 47.172zm136.049 93.604c13.568.748 26.882 10.704 29.374 24.397 2.366 11.825-3.358 23.524-10.705 32.485-12.075 14.438-28.382 24.771-44.807 33.609-1.622.991-2.99 2.237-4.235 3.608 21.659-5.478 43.314-13.689 60.867-27.756 9.705-8.091 18.294-18.799 20.163-31.619 1.743-11.076-2.86-22.528-11.077-29.871-9.96-9.09-24.021-12.448-37.218-10.704-7.593.995-15.931 2.613-21.158 8.961 6.226-1.241 12.32-3.733 18.796-3.11zM123.22 318.647c16.303 4.357 33.108 5.603 49.787 6.724 14.936.995 29.875 1.246 44.937 1.12 38.833-.619 77.916-3.236 116.003-11.699 3.608-.87 7.593-1.493 10.833-3.733 6.347-4.11 13.313-7.347 20.162-10.583-30.995 4.979-62.113 9.215-93.478 11.205-31.74 1.991-63.731 3.236-95.593 1.121-9.086-.87-18.423-1.371-26.886-4.858-1.994-.87-4.733-2.609-3.738-5.227 1.869-3.361 5.603-4.977 8.839-6.72 13.694-6.473 28.629-10.081 43.193-14.313-25.021-.376-49.916 5.971-72.814 15.806-5.105 2.491-10.83 4.481-14.936 8.714-1.622 1.739-1.622 4.732.247 6.222 3.735 3.361 8.711 4.854 13.444 6.221zm201.644 34.233c-21.784 3.859-43.694 7.472-65.726 8.589-24.147 1.618-48.294.247-72.191-2.241-4.604-.623-9.211-1.368-13.317-3.483-2.116-1.246-4.231-3.236-4.106-5.854.247-4.106 3.73-6.967 6.222-9.956-7.715 2.739-15.434 5.599-21.906 10.708-2.742 2.116-5.478 5.474-4.733 9.208 1.125 4.356 5.356 6.97 9.09 8.96 9.208 4.733 19.54 6.846 29.625 8.714 25.511 4.11 51.527 4.235 77.167 2.488 27.141-2.115 54.148-6.594 80.411-14.313-7.468-3.358-14.564-7.221-20.536-12.82zm-136.796 43.071c-6.97 1.99-14.066 4.357-19.79 8.957-2.868 2.241-5.105 6.104-3.734 9.713 1.743 4.604 6.1 7.347 10.203 9.705 10.708 5.854 22.78 8.589 34.604 10.708 26.765 4.229 54.27 3.608 80.908-1.12 15.806-2.989 31.615-7.221 46.301-13.815-9.584-3.984-18.917-8.467-27.878-13.693-15.559 2.738-31.246 5.603-47.178 6.598-21.032 1.618-42.319-.125-63.355-2.738-4.98-1.121-11.202-1.618-14.563-5.976-1.739-3.613 2.242-6.227 4.482-8.339zm170.277 80.031c17.424-3.604 34.977-7.719 50.908-15.806 4.976-2.867 11.076-5.979 12.698-11.95.87-5.725-5.105-8.714-9.337-11.08 2.613 2.993 4.356 7.347 1.74 10.83-4.357 5.853-11.821 8.091-18.42 10.332-20.66 5.85-42.072 8.216-63.355 10.582-56.385 5.102-113.146 6.348-169.528 1.618-18.92-1.994-38.217-4.109-56.264-10.829-2.86-1.246-7.217-2.492-7.217-6.352 1.117-3.354 4.357-5.227 7.217-6.845 12.945-6.595 27.384-10.207 41.822-11.077-4.228-2.491-9.208-2.738-14.062-2.613-12.076.373-23.9 3.483-35.349 7.347-9.834 3.604-19.916 7.59-27.76 14.811-3.111 2.735-5.971 7.962-2.739 11.699 4.98 5.353 12.699 6.72 19.54 8.338 38.338 6.599 77.171 10.328 116.011 11.699 51.531 1.498 103.434-.744 154.095-10.704zm51.033 6.724c-23.402 7.468-47.672 11.574-71.822 14.936-41.696 5.227-83.769 6.845-125.716 5.603-25.515-.995-51.03-2.738-76.176-6.974 5.85 3.984 13.071 5.227 19.794 7.096 28.257 5.976 57.255 7.096 86.01 7.966 42.19.748 84.387-.87 125.962-7.468 19.669-3.48 39.459-7.715 57.13-16.927 9.215-4.854 18.552-12.326 20.163-23.152-9.332 9.955-22.772 14.563-35.345 18.92z"
                />
              </svg>
              <h4 className="ml-[80px] mr-4">Java</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-white"
                src="/skills/python_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Python</h4>
            </span>

            <span className="relative text-right flex  items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-white"
                src="/skills/js_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">JavaScript</h4>
            </span>
          </div>

          <h3 className="text-center pt-2">Web Development</h3>

          <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-white"
                src="/skills/react_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">React</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-black"
                src="/skills/nextjs_light.svg"
                alt="The NextJS Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Next.js</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-white"
                src="/skills/tailwind_dark.png"
                alt="The Java Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Tailwind</h4>
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-white"
                src="/skills/html_dark.png"
                alt="The HTML Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">HTML</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/php_dark.svg"
                alt="The PHP Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">PHP</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/css_dark.png"
                alt="The CSS Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">CSS</h4>
            </span>
          </div>

          <h3 className="text-center pt-2">Database Management</h3>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/mysql_dark.svg"
                alt="The MySQL Logo"
                width={65}
                height={65}
              />

              <h4 className="ml-[80px] mr-4">MySQL</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/oracle_dark.svg"
                alt="The Oracle Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Oracle</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/postgresql_dark.svg"
                alt="The PostgreSQL Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">PostgreSQL</h4>
            </span>
          </div>

          <h3 className="text-center pt-2">App Development</h3>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl border-4 shadow-lg ring-1 ring-black/5">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/android_studio_dark.svg"
                alt="The Android Studio Logo"
                width={65}
                height={65}
              />

              <h4 className="ml-[75px] mr-4">Android Studio</h4>
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-1">
            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/flutter_dark.svg"
                alt="The Flutter Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Flutter</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-2 rounded-full shadow-lg bg-white"
                src="/skills/dart_dark.svg"
                alt="The Dart Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Dart</h4>
            </span>

            <span className="relative text-right flex items-center gap-6 overflow-visible rounded-xl shadow-lg border-4 ring-1 ring-black/5 ">
              <Image
                className="absolute -left-0.5 rounded-full shadow-lg bg-white"
                src="/skills/kotlin_dark.svg"
                alt="The Kotlin Logo"
                width={65}
                height={60}
              />

              <h4 className="ml-[80px] mr-4">Kotlin</h4>
            </span>
          </div>
        </section>

        {/** Hobbies Section */}
        <section
          id="hobbies"
          className="group/list flex flex-col gap-3 md:pt-4"
        >
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Hobbies</h2>
            <hr className="h-px" />

            <ul className="flex justify-center my-1 flex-col md:gap-2 md:flex-row ">
              <li className="group flex flex-col items-center">
                <div className="hobby border-4 p-1 flex items-center justify-center overflow-hidden bg-white dark:bg-black">
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
                <div className="hobby border-4 p-1 flex items-center justify-center overflow-hidden">
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
                <div className="hobby border-4 p-1 flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-14 h-14 transition-all scale-130  group-hover:scale-[1.3]"
                    viewBox="0 0 32 32"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="m30 26-6-5v-3l6-4v12ZM19 12.012A5.011 5.011 0 1 1 19 1.99a5.011 5.011 0 0 1 0 10.022ZM22 24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8ZM2 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm28 4-6 4a3.97 3.97 0 0 0-1.406-3.021C24.626 11.753 26 9.546 26 7a7 7 0 1 0-14 0c0 1.962.812 3.729 2.111 5h-3.668C11.4 10.937 12 9.544 12 8A6 6 0 0 0 0 8c0 1.809.816 3.41 2.082 4.511C.847 13.191 0 14.49 0 16v8a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-1l6 5a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"
                    />
                  </svg>
                </div>
                <h3 className="invisible group-hover:visible">Movies</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="hobby border-4 flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-full h-full transform scale-130 group-hover:scale-[1]"
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
                <div className="hobby border-4 p-1 flex items-center justify-center overflow-hidden">
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
