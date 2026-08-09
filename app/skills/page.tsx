export default function Skills() {
  const categories = [
    {
      title: "Certifications",
      border: "hover:border-amber-400/40",
      text: "text-amber-300",
      skills: [
        "CompTIA Pentest+",
        "CompTIA Security+",
        "Splunk Core Certified Power User",
      ],
    },
    {
      title: "Security Tools",
      border: "hover:border-red-400/40",
      text: "text-red-300",
      skills: [
        "Splunk Enterprise Security",
        "Splunk SOAR",
        "Wireshark",
        "Nmap",
      ],
    },
    {
      title: "Platforms & Technologies",
      border: "hover:border-green-400/40",
      text: "text-green-300",
      skills: [
        "Linux CLI",
        "Tailscale",
        "Git",
        "MS365",
      ],
    },
    {
      title: "Programming Languages",
      border: "hover:border-blue-400/40",
      text: "text-blue-300",
      skills: [
        "SPL",
        "Java",
        "Python",
        "Powershell",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] px-6 py-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className={`text-xl md:text-4xl font-semibold mb-4 text-center ${category.text}`}>
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`px-8 py-5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 ${category.border} hover:bg-black/60 transition text-gray-200 text-sm md:text-base`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}