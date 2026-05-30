export default function CxC() {
  return (
    <div className="min-h-[calc(100vh-64px)] px-6 py-20 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          CxC
        </h1>
        <p className="text-gray-400 mb-12 text-base md:text-lg">
          The <a href="https://www.lsu.edu/cxc/index.php" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 transition-colors duration-200">Communication across the Curriculum (CxC)</a> program at LSU is a university-wide initiative that develops students communication skills across written, oral, visual, and technological disciplines. The projects below represent my work and projects relating to this program.
        </p>
        <div className="flex flex-col gap-6">
          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 hover:bg-white/10 transition">
            <h2 className="text-xl md:text-2xl font-semibold text-green-300 mb-3">
              Binge, Bot, Repeat: Unpacking the Ecosystem of Video Piracy on Telegram
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Collaborated with other researchers to publish a paper on video piracy within Telegram.
            </p>
            <a href="/publications" className="text-sm text-green-300 group-hover:underline">
              View on publications page →
            </a>
          </div>
          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-400/40 hover:bg-white/10 transition">
            <h2 className="text-xl md:text-2xl font-semibold text-orange-300 mb-3">
              Cybersecurity Clinic Simulated Attack
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 text-sm md:text-base">
              <li>Worked within a group to create a fake 5-page Critical Infrastructure company security document</li>
              <li>Traded documents and simulated attacks on the other CI company</li>
              <li>Gave a 10-minute presentation on the findings and simulated scenario</li>
            </ul>
          </div>
          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-3">
              Cloud Security Presentation
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Taught cloud security principles to cybersecurity underclassmen and created hands-on PicoCTF challenges to reinforce the concepts.
            </p>
            <a href="/projects#cloudsecurity" className="text-sm text-blue-300 group-hover:underline">
              View on projects page →
            </a>
          </div>
          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-400/40 hover:bg-white/10 transition">
            <h2 className="text-xl md:text-2xl font-semibold text-red-300 mb-3">
              Privilege Escalation Presentation
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Demonstrated SUID and CronJob misconfiguration exploits live on a purpose-built vulnerable Linux VM to teach privilege escalation to club members.
            </p>
            <a href="/projects#privesc" className="text-sm text-red-300 group-hover:underline">
              View on projects page →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}