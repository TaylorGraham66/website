import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 text-gray-300">
      <div className="text-2xl font-semibold tracking-wide">
        Taylor Graham
      </div>
      <div className="flex items-center gap-8 text-lg">
        <Link className="hover:text-taupe-50 transition-colors duration-200" href="/">
          Home
        </Link>
        <div className="relative group">
          <Link className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200" href="/experience">
            Experience
          </Link>
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block">
            <div className="flex flex-col bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg text-sm min-w-[120px] shadow-lg">
              <Link href="/experience#soc" className="px-4 py-2 hover:text-cyan-300 transition">
                SOC Analyst
              </Link>
              <Link href="/experience#research" className="px-4 py-2 hover:text-cyan-300 transition">
                Research
              </Link>
              <Link href="/experience#ssl" className="px-4 py-2 hover:text-cyan-300 transition">
                SSL
              </Link>
            </div>
          </div>
        </div>
        <Link className="text-purple-300 hover:text-purple-200 transition-colors duration-200" href="/projects">
          Projects
        </Link>
        <Link className="text-green-300 hover:text-green-200 transition-colors duration-200" href="/skills">
          Skills
        </Link>
      </div>
    </nav>
  );
}