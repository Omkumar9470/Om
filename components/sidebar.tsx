import Image from "next/image"
import Link from "next/link"

interface SidebarProps {
  currentPage: string
}

export default function Sidebar({ currentPage }: SidebarProps) {
  return (
    <div className="w-50 flex flex-col gap-0 ml-[-150px]">
      <SidebarItem href="/" icon={<WelcomeIcon />} label="Welcome" active={currentPage === "welcome"} />
      <SidebarItem href="/projects" icon={<ProjectsIcon />} label="My Projects" active={currentPage === "projects"} />
      <SidebarItem
        href="/experience"
        icon={<ExperienceIcon />}
        label="Experience"
        active={currentPage === "experience"}
      />
      <SidebarItem
        href="/testimonials"
        icon={<TestimonialsIcon />}
        label="Testimonials"
        active={currentPage === "testimonials"}
      />
      <SidebarItem href="/contact" icon={<ContactIcon />} label="Contact" active={currentPage === "contact"} />
    </div>
  )
}

function SidebarItem({ href, icon, label, active = false }) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center p-2 text-[10px] text-center cursor-pointer ${
        active
          ? ""
          : " hover:translate-x-[3px] hover:translate-y-[3px]"
      } transition-all`}
    >
      <div className="m-1">{icon}</div>
      <span className=" font-bold text-base">{label}</span>
    </Link>
  )
}

function WelcomeIcon() {
  return (
    <div className="">
      <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/pc_logo_h0m2ud.png" alt="Window Icon" width={80} height={80} />
    </div>
  ) 
}

function ProjectsIcon() {
  return (
    <div className="">
      <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470191/projects_tkb0zi.png" alt="Window Icon" width={80} height={80} />
    </div>
  )
}

function ExperienceIcon() {
  return (
    <div className="">
      <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/experience_uudg2s.png" alt="Window Icon" width={80} height={80} />
    </div>
  )
}

function TestimonialsIcon() {
  return (
    <div className="">
      <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/test_jyfajs.png" alt="Window Icon" width={80} height={80} />
    </div>
  )
}

function ContactIcon() {
  return (
    <div className="">
      <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/contact_jyk1pp.png" alt="Window Icon" width={80} height={80} />
    </div>
  )
}
