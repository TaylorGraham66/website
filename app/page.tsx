import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center px-10 py-8 overflow-hidden">

      <div className="w-full max-w-6xl flex flex-col gap-12">

        <section className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6">
              Taylor Graham
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Cybersecurity student and SOC Analyst focused on threat detection,
              incident response, and security automation. This portfolio highlights
              my experience, projects, and technical skills.
            </p>
          </div>
          <div>
            <Image
              src="/images/IMG_7580.jpg"
              width={260}
              height={340}
              alt="Profile"
              className="rounded-2xl shadow-xl border border-white/10"
            />
          </div>

        </section>



        <section className="grid md:grid-cols-3 gap-6">

          <Link href="/experience" className="h-full">
            <div className="group h-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition cursor-pointer flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-cyan-300">
                Experience
              </h2>
              <p className="text-gray-300 flex-grow">
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
              <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                Projects
              </h2>
              <p className="text-gray-300 flex-grow">
                TBA
              </p>
              <span className="text-sm text-purple-300 mt-4 group-hover:underline">
                Explore projects →
              </span>
            </div>
          </Link>
          <Link href="/skills" className="h-full">
            <div className="group h-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 hover:bg-white/10 transition cursor-pointer flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-green-300">
                Skills
              </h2>
              <p className="text-gray-300 flex-grow">
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