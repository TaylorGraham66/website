import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className = "flex items-center justify-center h-screen gap-12 px-20">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Portfolio Website</h1>
          <p className="text-lg">
            Hello! My name is Taylor Graham and this is my portfolio website. This website displays my experience, skills, and projects.
          </p>
        </div>
        <div>
          <img className = "h-80 w-60 rounded-xl shadow-lg" src="/images/IMG_7580.jpg" />
        </div>
      </div>
    </div>
  );
}