
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MySQL",
  "Git & GitHub",
  "REST APIs",
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website that showcases my background, education, technical skills, and interests.",
    tools: "Next.js • TypeScript • Tailwind CSS",
  },
  {
    number: "02",
    title: "Database Design",
    description:
      "An academic database project focused on organizing information and understanding database relationships.",
    tools: "MySQL • Database Management",
  },
  {
    number: "03",
    title: "Programming Projects",
    description:
      "Different programming exercises and projects that help me improve my coding and problem-solving skills.",
    tools: "C++ • JavaScript • Programming",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="bg-slate-50 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="mb-5 inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Welcome to My Portfolio
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Hello, I'm
              <span className="block text-blue-600">
                Rowell Cantor
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-600 md:text-2xl">
              IT Student & Aspiring Web Developer
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              I am a passionate student who enjoys exploring
              technology, programming, and web development.
              I love learning new things, developing my skills,
              and creating projects that allow me to grow
              both personally and professionally.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/about"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                About Me
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-9 flex items-center gap-6">
              <a
                href="https://github.com/rowcantor-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-600 transition hover:text-blue-600"
              >
                GitHub ↗
              </a>

              <span className="h-5 w-px bg-slate-300"></span>

              <a
                href="/education"
                className="font-semibold text-slate-600 transition hover:text-blue-600"
              >
                My Education ↗
              </a>
            </div>
          </div>

          {/* PROFILE PICTURE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-blue-200 opacity-50 blur-2xl"></div>

              <img
                src="/profile.jpg"
                alt="Rowell Cantor - Profile Picture"
                className="relative aspect-square w-full rounded-3xl border-8 border-white object-cover shadow-2xl"
              />

              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-4 shadow-xl">
                <p className="text-sm font-medium text-slate-500">
                  Currently learning
                </p>
                <p className="mt-1 font-bold text-blue-600">
                  Web Development
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-widest text-blue-600">
            Introduction
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            About Me
          </h2>

          <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
            My name is Rowell Cantor, and I am an IT student
            interested in technology and software development.
            I enjoy discovering how websites and applications
            work and learning the different tools used to build them.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            As I continue my journey in Information Technology,
            I aim to improve my programming abilities, gain
            practical experience, and become a skilled web developer.
            I believe that every challenge and project is an
            opportunity to learn something new.
          </p>

          <a
            href="/about"
            className="mt-8 inline-block font-bold text-blue-600 hover:underline"
          >
            Read More About Me →
          </a>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              What I Know
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              My Technical Skills
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
              Here are some of the programming languages,
              technologies, and tools I have learned and
              continue to explore.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-7 text-center font-bold text-slate-700 shadow-sm transition hover:-translate-y-2 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              My Work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-5 text-slate-600">
              Some of my academic and personal learning projects.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-4xl font-extrabold text-blue-100 transition group-hover:text-blue-500">
                  {project.number}
                </p>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-28 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-sm font-semibold text-blue-600">
                    {project.tools}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-blue-600 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <p className="font-bold uppercase tracking-widest text-blue-100">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Let's Connect!
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-blue-100">
            Thank you for visiting my personal portfolio.
            If you would like to know more about me, my skills,
            or my projects, feel free to get in touch!
          </p>

          <a
            href="/contact"
            className="mt-9 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
          >
            Contact Me →
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Rowell Cantor. All Rights Reserved.
        </p>

        <p className="mt-2">
          Designed and developed with passion.
        </p>
      </footer>

    </main>
  );
}
