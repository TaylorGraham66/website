export default function Experience() {
  return (
    <div className="h-[calc(100vh-64px)] overflow-y-scroll snap-y snap-mandatory">

      <section id="soc" className="snap-center flex items-center justify-center h-full px-6">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl font-bold">
              Tier 2 SOC Analyst
            </h1>
            <h2 className="text-lg text-gray-300">
              October 2024 - Present
            </h2>
          </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>Analyzed and triaged over 3,000 security events across 29 tenants leveraging Splunk ES and Splunk SOAR</li>
              <li>Escalate to and communicate with clients performing remediation as necessary</li>
              <li>Design dashboards and custom search queries utilizing SPL to support in-depth event analysis</li>
              <li>Validate Tier 1 Analyst escalations, provide real-time guidance, and perform quality assurance review</li>
              <li>Support the training and onboarding of new analysts</li>
            </ul>
        </div>
      </section>



      <section id="research" className="snap-center flex items-center justify-center h-full px-6">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl font-bold">
              Research Assistant
            </h1>
            <h2 className="text-lg text-gray-300">
              September 2025 - Present
            </h2>
          </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>Partner with researchers to train, evaluate, and refine LLM models</li>
              <li>Perform structured OSINT collection to gather real-world examples for supervised learning workflows</li>
              <li>Create high-quality datasets to train LLM-based Agents for identifying malicious activity on websites and social media</li>
            </ul>
        </div>
      </section>



      <section id="ssl" className="snap-center flex items-center justify-center h-full px-6">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl font-bold">
              SSL Team Lead
            </h1>
            <h2 className="text-lg text-gray-300">
              April 2025 - Present
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Collaborate with fellow club officers to plan and execute cybersecurity club meetings and activities</li>
            <li>Present cybersecurity concepts and practical skills to underclassmen to support technical learning</li>
          </ul>
        </div>
      </section>

    </div>
  );
}