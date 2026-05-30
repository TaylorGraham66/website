import Link from "next/link";

export default function Publications() {
  return (
    <div className="min-h-[calc(100vh-64px)] px-6 py-20 flex justify-center">
      <div className="max-w-4xl w-full">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
          Publications
        </h1>

        <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 hover:bg-white/10 transition">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-1">
            Binge, Bot, Repeat: Unpacking the Ecosystem of Video Piracy on Telegram
          </h2>
          <p className="text-gray-500 text-sm mb-3">
            arXiv — 2025
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            This paper investigates the automated distribution of pirated video content through Telegram, examining how bots are leveraged to share and monetize copyrighted material at scale. Through systematic data collection and analysis, the study characterizes the scope of this ecosystem, the techniques used to evade detection, and the broader implications for digital copyright enforcement.
          </p>
          <Link
            href="https://arxiv.org/abs/2605.08418"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-300 group-hover:underline"
          >
            Read on arXiv →
          </Link>
        </div>

      </div>
    </div>
  );
}