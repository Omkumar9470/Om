import Sidebar from "@/components/sidebar"
import ProjectsWindow from "@/components/projects-window"
import TopBar from "@/components/top-bar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f3e07e] flex flex-col">
      <TopBar />
      <div className="flex-1 flex p-4 gap-4 max-w-7xl mx-auto w-full">
        <Sidebar currentPage="projects" />
        <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-center sm:mx-auto sm:w-full ml-6">
  <ProjectsWindow />
</div>

      </div>
    </div>
  )
}