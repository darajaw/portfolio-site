import Image from "next/image";

export default function Home() {
  return (
    <div className=" lg:w-[70%] lg:py-8">
      <main className="">
        <div id="about" className="mb-3">
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

        <section id="skills" className="pt-2 group/list flex flex-col gap-2">
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Skills</h2>
            <hr className="h-px" />
          </div>
        </section>

        <section id="hobbies" className="pt-2 group/list flex flex-col gap-2">
          <div>
            <hr className="h-px" />
            <h2 className="text-center">Hobbies</h2>
            <hr className="h-px" />

            <ul className="flex justify-center my-1 gap-2">
              <li className="group flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="object-cover scale-[1.1] group-hover:scale-[0.6]"
                    src="/gaming_dark.png"
                    alt="Game Controller"
                    width={100}
                    height={100}
                  />                  
                </div>
                <h3 className="invisible group-hover:visible">Gaming</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="object-cover scale-[1.1] group-hover:scale-[0.6]"
                    src="/coding_dark.png"
                    alt="A coding icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="invisible group-hover:visible">Coding</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="object-cover scale-[1.3] group-hover:scale-[0.6]"
                    src="/movies_dark.png"
                    alt="A movie icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="invisible group-hover:visible">Movies</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="object-cover scale-[1.3] group-hover:scale-[0.8]"
                    src="/comics_dark.png"
                    alt="A book icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="invisible group-hover:visible">Reading</h3>
              </li>

              <li className="group flex flex-col items-center">
                <div className="group w-5 h-5 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden group-hover:w-8 group-hover:h-8">
                  <Image
                    className="object-cover scale-[1.3] group-hover:scale-[0.8]"
                    src="/writing_dark.png"
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
