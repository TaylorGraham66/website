export default function Experience() {
  return (
    <div className="min-h-[calc(100vh-64px)] px-6 py-20 flex justify-center">
      
      <div className="relative max-w-6xl w-full space-y-24">

        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-white/10"></div>


        {/* SOC Analyst */}
        <section id="soc" className="scroll-mt-28 relative flex flex-col md:flex-row items-start md:items-center"></section>
        <div id="soc" className="relative flex flex-col md:flex-row items-start md:items-center">

          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>

          <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg ">

              <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">
                  Tier 2 SOC Analyst
                </h1>
                <h2 className="text-gray-300 text-sm md:text-base">
                  Oct 2024 – Present
                </h2>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-200 text-sm md:text-base">
                <li>Analyzed and triaged over 3,000 security events across 29 tenants leveraging Splunk ES and Splunk SOAR</li>
                <li>Escalate to and communicate with clients performing remediation as necessary</li>
                <li>Design dashboards and custom search queries utilizing SPL to support in-depth event analysis</li>
                <li>Validate Tier 1 Analyst escalations and perform quality assurance review</li>
                <li>Support training and onboarding of new analysts</li>
              </ul>

            </div>
          </div>
        </div>


        {/* SSL Project Lead & Outreach Chair*/}
        <section id="ssl" className="scroll-mt-28 relative flex flex-col md:flex-row items-start md:items-center"></section>
        <div id="ssl" className="relative flex flex-col md:flex-row items-start md:items-center">
        
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-slate-900"></div>

          <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg w-2xl">
              
              <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">
                  Club Project Lead & Outreach Chair
                </h1>
                <h2 className="text-gray-300 text-sm md:text-base">
                  Feb 2025 – Present
                </h2>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-200 text-sm md:text-base">
                <li>Collaborate with fellow club officers to plan and execute cybersecurity club meetings and activities</li>
                <li>Facilitate active learning by leading home lab infrastructure projects and guiding underclassmen</li>
                <li>Present cybersecurity concepts and practical skills to underclassmen to support technical learning and engagement</li>
                <li>Communicate with external companies and individuals to foster a relationship and establish connections</li>
              </ul>

            </div>
          </div>
        </div>


        {/* Research */}
        <section id="research" className="scroll-mt-28 relative flex flex-col md:flex-row items-start md:items-center"></section>
        <div id="research" className="relative flex flex-col md:flex-row items-start md:items-center">

          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900"></div>

          <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">

              <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">
                  Research Assistant
                </h1>
                <h2 className="text-gray-300 text-sm md:text-base">
                  Sep 2025 – Present
                </h2>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-200 text-sm md:text-base">
                <li>Partner with researchers to train, evaluate, and refine LLM models</li>
                <li>Perform structured OSINT collection to gather real-world examples</li>
                <li>Create datasets to train LLM-based agents detecting malicious activity</li>
              </ul>

            </div>
          </div>
        </div>


        {/* IT */}
        <section id="it" className="scroll-mt-28 relative flex flex-col md:flex-row items-start md:items-center"></section>
        <div className="relative flex flex-col md:flex-row items-start md:items-center">

          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-900"></div>

          <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg w-2xl">

              <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">
                  IT Intern
                </h1>
                <h2 className="text-gray-300 text-sm md:text-base">
                  February 2024 – August 2024
                </h2>
              </div>
                
              <ul className="list-disc pl-6 space-y-2 text-gray-200 text-sm md:text-base">
                <li>Enlisted for a project to image 12,000 Lenovo devices using hard keys to prepare for the upcoming school year</li>
                <li>Performed various hardware repairs of student devices to improve device lifecycle</li>
                <li>Fixed diverse software, account, and permission issues improving student and staff productivity</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}