import Image from "next/image"
import Link from "next/link"

export default function ExperienceWindow() {
  const experiences = [
    {
      title: "Co-Founder",
      company: "ExtraVita",
      period: "2024 - Present",
      description: "Making this company a reality.",
    },
    {
      title: "Designer",
      company: "EzWoods",
      period: "2025 - Present",
      description: "Designing the future of this company.",
    },

  ]

  return (
    <div className="w-full max-w-full mx-auto sm:max-w-4xl  border-4 border-black sm:ml-5 sm:rounded-xl rounded-md bg-white overflow-hidden">
      <div className="w-full max-w-4xl border- border-black bg-white overflow-hidden">
      <div className="bg-white text-black px-2 py-1 flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-2">
        <div className=" flex items-center justify-center overflow-hidden">
          <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/experience_uudg2s.png" alt="Window Icon" width={30} height={30}/>
        </div>
          <span className="text-sm font-bold">Experience</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-5 h-4 bg-[#c0c0c0] border-2 border-black flex items-center justify-center text-black text-xs">
            −
          </button>
          <button className="w-5 h-4 bg-[#c0c0c0] border-2 border-black flex items-center justify-center text-black text-xs">
            □
          </button>
          <button className="w-5 h-4 bg-[#c0c0c0] border-2 border-black flex items-center justify-center text-black text-xs">
            ×
          </button>
        </div>
      </div>

        <div className="p-3 sm:p-6 bg-white">
          <h2 className="text-2xl mb-4 text-black">My Journey Through Digital Realms</h2>
          <div className="space-y-3 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-2 rounded-md border-black p-4 bg-[#f0f0f0]">
                <h3 className="font-bold text-lg text-black">{exp.title}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
                <p className="text-sm text-black">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
