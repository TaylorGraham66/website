import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-10 py-8">

      <div className="w-full max-w-6xl flex flex-col gap-10 md:gap-12">

        <section className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Taylor Graham
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              Cybersecurity student and SOC Analyst focused on threat detection,
              incident response, and security automation. This portfolio highlights
              my experience, projects, and technical skills.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/IMG_7580.jpg"
              width={260}
              height={340}
              alt="Profile"
              className="w-40 md:w-52 lg:w-64 h-auto rounded-2xl shadow-xl border border-white/10"
            />
          </div>

        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link href="/experience" className="h-full">
            <div className="group h-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition cursor-pointer flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-cyan-300">
                Experience
              </h2>

              <p className="text-gray-300 flex-grow text-sm md:text-base">
                SOC Analyst experience triaging thousands of alerts,
                building SIEM queries, and supporting incident response.
              </p>

              <span className="text-sm text-cyan-300 mt-4 group-hover:underline">
                View full experience →
              </span>
            </div>
          </Link>

          <Link href="/projects" className="h-full">
            <div className="group h-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 hover:bg-white/10 transition cursor-pointer flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-purple-300">
                Projects
              </h2>

              <p className="text-gray-300 flex-grow text-sm md:text-base">
                TBA
              </p>

              <span className="text-sm text-purple-300 mt-4 group-hover:underline">
                Explore projects →
              </span>
            </div>
          </Link>

          <Link href="/skills" className="h-full">
            <div className="group h-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 hover:bg-white/10 transition cursor-pointer flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-300">
                Skills
              </h2>

              <p className="text-gray-300 flex-grow text-sm md:text-base">
                TBA
              </p>

              <span className="text-sm text-green-300 mt-4 group-hover:underline">
                View skills →
              </span>
            </div>
          </Link>

        </section>

      </div>
    </div>
  );
}