import Sidebar from "@/components/sidebar"
import TestimonialsWindow from "@/components/testimonials-window"
import Notifications from "@/components/notifications"
import TopBar from "@/components/top-bar"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#f3e07e] flex flex-col">
      <TopBar />
      <div className="flex-1 flex p-4 gap-4 max-w-7xl mx-auto w-full">
        <Sidebar currentPage="testimonials" />
        <div className="flex-1 flex items-center sm:w-full sm:items-center sm:justify-center sm:mx-auto ml-6 justify-center">
          <TestimonialsWindow />
        </div>
        <div className="w-80 space-y-4 hidden md:block">
          <Notifications />
        </div>
      </div>
    </div>
  )
}
