
import Link from "next/link";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-600">
          Welcome to My Portfolio
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
          Hi, I'm <span className="text-sky-600">Rowell Cantor</span>
        </h1>

        <h2 className="mt-5 text-xl font-medium text-slate-600 sm:text-2xl">
          IT Student & Aspiring Web Developer
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
          I am an Information Technology student who enjoys learning about
          technology, programming, and web development. I am always looking
          for opportunities to improve my skills, explore new technologies,
          and gain more experience.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/about"
            className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            About Me
          </Link>

          <a
            href="https://github.com/rowcantor-coder"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-sky-600 px-6 py-3 font-semibold text-sky-600 transition hover:bg-sky-50"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Get to Know Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            I am passionate about technology and enjoy discovering how
            websites and applications are developed. As an IT student,
            I believe that learning never stops. Every project and activity
            gives me a chance to improve my knowledge, develop my abilities,
            and prepare myself for my future career in the technology field.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            My Technical Knowledge
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            My Skills
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-600"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Let's Connect
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          Thank you for visiting my portfolio. I appreciate your time
          exploring my work and learning more about my journey as an
          Information Technology student.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-block rounded-lg bg-sky-600 px-7 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          Contact Me
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Rowell Cantor. All rights reserved.
      </footer>

    </main>
  );
}
