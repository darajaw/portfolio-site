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
        <section id="hobbies" className="pt-4 group/list flex flex-col gap-2 md:pt-4">
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Hobbies</h2>
            <hr className="h-px" />

            <ul className="flex justify-center my-1 flex-col md:gap-2 md:flex-row ">
              <li className="group flex flex-col items-center">
                <div className="transition-all w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="transition-all object-cover scale-[1.1] group-hover:scale-[0.6]"
                    src="/hobbies/gaming_dark.png"
                    alt="Game Controller"
                    width={100}
                    height={100}
                  />                  
                </div>
                <h3 className="invisible group-hover:visible">Gaming</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="transition-all object-cover scale-[1.1] group-hover:scale-[0.6]"
                    src="/hobbies/coding_dark.png"
                    alt="A coding icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="invisible group-hover:visible">Coding</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="transition-all object-cover scale-[1.3] group-hover:scale-[0.6]"
                    src="/hobbies/movies_dark.png"
                    alt="A movie icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="invisible group-hover:visible">Movies</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="transition-all  object-cover scale-[1.3] group-hover:scale-[0.8]"
                    src="/hobbies/comics_dark.png"
                    alt="A book icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="invisible group-hover:visible">Reading</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="transition-all w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="transition-all object-cover scale-[1.3] group-hover:scale-[0.8]"
                    src="/hobbies/writing_dark.png"
                    alt="A pen icon"
                    width={100}
                    height={100}
                  />
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
