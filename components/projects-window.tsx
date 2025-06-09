import Image from "next/image"
import Link from "next/link"

export default function ProjectsWindow() {
  const projects = [
    {
      id: 1,
      title: "Movie Recommendation",
      year: "2023",
      tags: ["Python", "MachineLearning", "Stramlit"],
      description:
        "A machine learning-based movie recommendation app that suggests 4 related movies based on the user's input. Designed for a smooth and minimal user experience using Streamlit.",
      image: "https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470035/0_BIJL7Ue0fMQqxd_d_fnckze.webp?height=300&width=400",
    },
    {
      id: 2,
      title: "Handicrafts Store",
      year: "2025",
      tags: ["Figma"],
      description:
        "A minimal and user-friendly e-commerce design for selling handcrafted and aesthetic products. Created in Figma with a focus on clean layout and visual appeal.",
      image: "https://res.cloudinary.com/dpsmum8qz/image/upload/v1749068650/Screenshot_2025-06-05_015354_zearcx.png",
    },
    
  ]

  return (
    <div className="w-full max-w-6xl mx-auto md:ml-28 border-4 border-black rounded-xl  bg-[#c0c0c0] overflow-hidden">
      <div className="bg-white text-black px-2 py-1 flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-2">
        <div className=" flex items-center justify-center overflow-hidden">
          <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470191/projects_tkb0zi.png" alt="Window Icon" width={30} height={30}/>
        </div>
          <span className="text-sm font-bold">My Projects</span>
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

      <div className="p-6 bg-white">
        {/* Header section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Wondering if you should hire me?</h2>
            <p className="text-sm text-gray-600">The realm needs good hands—and I happen to have two</p>
          </div>
          <div className="flex gap-3">
            <button className="border-2 border-black px-4 py-2 bg-white hover:bg-[#c0c0c0] text-sm hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
              No, I’ll just ride North and forget this ever happened.
            </button>
            <button className="border-2 border-black px-4 py-2 bg-white hover:bg-[#c0c0c0] text-sm hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
              Yes, bend the knee—you’ve found your Hand of the King.
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex gap-4">
              <div className="w-48 h-36 border-2 border-black overflow-hidden flex-shrink-0">
                <img
                  src={project.image || "https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470035/0_BIJL7Ue0fMQqxd_d_fnckze.webp"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-serif text-black">{project.title}</h3>
                  <span className="text-sm text-gray-500">[ {project.year} ]</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-gray-500 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-black leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}
