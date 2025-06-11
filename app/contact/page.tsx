import Sidebar from "@/components/sidebar"
import ContactWindow from "@/components/contact-window"
import Notifications from "@/components/notifications"
import TopBar from "@/components/top-bar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f3e07e] flex flex-col">
      <TopBar />
      <div className="flex-1 flex p-4 gap-4 max-w-7xl mx-auto w-full">
        <Sidebar currentPage="contact" />
        <div className="flex-1 flex  ml-6 items-center justify-center">
          <ContactWindow />
        </div>
        <div className="w-80 space-y-4 hidden md:block">
          <Notifications />
        </div>
      </div>
    </div>
  )
}
