"use client";

import { useState, useEffect, useRef } from "react";

const projects = [
    {
    id: "homelab",
    title: "Cybersecurity Home Lab",
    image: "/images/prox.png",
    bullets: [
      "Deployed a personal cybersecurity home lab using Proxmox for virtualization",
      "Configured a Splunk SIEM pipeline with Universal Forwarders across all lab VMs to ingest and index logs",
      "Simulated full attack cycles executing blue team log analysis following red-team simulated attacks"
    ]
  },
  {
    id: "chatroom",
    title: "Multi-Client Chatroom",
    image: "/images/chatroom.jpg",
    bullets: [
      "Developed Python Flask backend handling routing and database logic",
      "Built responsive frontend using HTML, CSS, and JavaScript",
      "Implemented SQLite database storing chat messages and usernames"
    ]
  },
  {
    id: "cloudsecurity",
    title: "Cloud Security Presentation",
    image: "/images/cloud.jpg",
    bullets: [
      "Researched key cloud security principles",
      "Designed presentation teaching cybersecurity underclassmen",
      "Curated PicoCTF challenges for students to practice skills"
    ]
  },
  {
    id: "privesc",
    title: "Privilege Escalation Demonstration",
    image: "/images/privesc.jpg",
    bullets: [
      "Researched privilege escalation vulnerabilities",
      "Demonstrated SUID and CronJob misconfiguration exploits",
      "Built a vulnerable Linux VM for live demonstration"
    ]
  },
  {
    id: "javagame",
    title: "Java Video Game",
    image: "/images/game.jpg",
    bullets: [
      "Developed a video game using the BasicGraphics Java library",
      "Implemented wave-based survival gameplay",
      "Used ClockWorker thread manager for time-based mechanics"
    ]
  },
  {
    id: "securelogin",
    title: "Secure Login System",
    image: "/images/run_through.jpg",
    bullets: [
      "Built account creation and login authentication in Python",
      "Stored hashed passwords and MFA questions",
      "Implemented secure credential verification"
    ]
  },
  {
    id: "hackathon",
    title: "SASE Hackathon Website",
    image: "/images/plates.jpg",
    bullets: [
      "Led a team during a two-day hackathon",
      "Built website using HTML, CSS, and JavaScript",
      "Integrated Firebase authentication for saving user preferences"
    ]
  }
];

export default function Projects() {

  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((current) => (current + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const current = projects[index];

  return (
    <main className="text-white">

      {/* Carousel */}
      <section className="mt-20 flex justify-center py-16">

        <div
          className="relative w-[85%] h-[60vh] rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
          onMouseLeave={() => startTimer()}
        >

          {/* Background Image */}
          <div
            key={current.id}
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${current.image})` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Title */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <a
              href={`#${current.id}`}
              className="text-4xl font-bold hover:text-orange-400 transition"
            >
              {current.title}
            </a>
          </div>

          {/* Left Button */}
          <button
            onClick={() => {
              prevSlide();
              startTimer();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full text-white text-2xl"
          >
            ←
          </button>

          {/* Right Button */}
          <button
            onClick={() => {
              nextSlide();
              startTimer();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full text-white text-2xl"
          >
            →
          </button>

        </div>

      </section>


      {/* Project Sections */}
      {projects.map((project) => (
        <section
          key={project.id}
          id={project.id}
          className="min-h-screen flex items-center px-12"
        >

          <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">

            {/* Left Card */}
            <div className="bg-neutral-900 p-10 rounded-2xl shadow-xl">

              <h2 className="text-3xl font-bold mb-6">
                {project.title}
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-lg">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">

              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg max-h-[500px] object-cover"
              />

            </div>

          </div>

        </section>
      ))}

    </main>
  );
}