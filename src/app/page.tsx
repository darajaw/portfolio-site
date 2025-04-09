
export default function Home() {
  return (
    <div >

      <main className=" flex basis-128">
        <div className=" p-1">
        <div id="about" className="mb-3">
          <h2 className="mb-1">Hi There!</h2>
          <p>Thank you for visiting my website. I am a Full Stack Developer with expertise in various technologies. Feel free to explore my skills, education, and hobbies through the navigation menu. As I continue to add new features to enhance this website, please feel free to send me your feedback!</p>
        </div>

        <div id="projects" className="group/list flex flex-col gap-2">
          <span className=" p-1 hover:outline-1 rounded-md hover:drop-shadow-lg hover:bg-slate-800 group">
            <a href="https://github.com/darajaw/Smart-Diary" className="flex flex-col md:flex-row">
              <div className="md:basis-80">
                <p className="pb-1">Nov 2024 - Dec 2024 </p>
              </div>

              <div>
                <h3 className="group-hover:text-green-300">Smart Diary</h3>
                <p>I developed a journaling website using SQL, PHP, HTML, CSS, and JavaScript, enabling users to register accounts, search for, and edit previous entries. Throughout the project, I applied Agile principles such as iterative development and collaboration to effectively design and implement both the website and its supporting database. Additionally, I coordinated the troubleshooting of various program bugs, particularly those related to database connection issues.</p>
              </div>          
            </a>
          </span>          
        </div>

        <div id="projects" className="group/list flex flex-col gap-2">
          <span className=" p-1 hover:outline-1 rounded-md hover:drop-shadow-lg hover:bg-slate-800 group">
            <a href="https://github.com/darajaw/Smart-Diary" className="flex flex-col md:flex-row">
              <div className="md:basis-80">
                <p className="pb-1">Nov 2024 - Dec 2024 </p>
              </div>

              <div>
                <h3 className="group-hover:text-green-300">Smart Diary</h3>
                <p>I developed a journaling website using SQL, PHP, HTML, CSS, and JavaScript, enabling users to register accounts, search for, and edit previous entries. Throughout the project, I applied Agile principles such as iterative development and collaboration to effectively design and implement both the website and its supporting database. Additionally, I coordinated the troubleshooting of various program bugs, particularly those related to database connection issues.</p>
              </div>          
            </a>
          </span>          
        </div>

        </div>
      </main>

    </div>
  );
}
