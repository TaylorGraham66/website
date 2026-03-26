import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between px-10 py-4 bg-gray-500 text-white">
        <div className="text-2xl font-bold">
          Taylor Graham
        </div>

        <div className="flex gap-8 text-lg">
            <Link className="hover:text-blue-400 transition" href="/">Home</Link>
            <Link className="hover:text-blue-400 transition" href="/about">About</Link>
            <Link className="hover:text-blue-400 transition" href="/experience">Experience</Link>
            <Link className="hover:text-blue-400 transition" href="/projects">Projects</Link>
        </div>
    </nav>
  );
}