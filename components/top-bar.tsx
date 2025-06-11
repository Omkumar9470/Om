"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./ui/drawer"

// Sidebar icon components (copied from Sidebar)
function WelcomeIcon() {
  return (
    <div className="">
      <img src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/pc_logo_h0m2ud.png" alt="Window Icon" width={30} height={30} />
    </div>
  )
}
function ProjectsIcon() {
  return (
    <div className="">
      <img src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470191/projects_tkb0zi.png" alt="Window Icon" width={30} height={30} />
    </div>
  )
}
function ExperienceIcon() {
  return (
    <div className="">
      <img src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/experience_uudg2s.png" alt="Window Icon" width={30} height={30} />
    </div>
  )
}
function TestimonialsIcon() {
  return (
    <div className="">
      <img src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/test_jyfajs.png" alt="Window Icon" width={30} height={30} />
    </div>
  )
}
function ContactIcon() {
  return (
    <div className="">
      <img src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/contact_jyk1pp.png" alt="Window Icon" width={30} height={30} />
    </div>
  )
}

export default function TopBar() {
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const ampm = hours >= 12 ? "PM" : "AM"
      const formattedHours = hours % 12 || 12
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`)
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      const day = days[now.getDay()]
      const month = months[now.getMonth()]
      const date = now.getDate()
      const year = now.getFullYear()
      setCurrentDate(`${day}, ${month} ${date}, ${year}`)
    }
    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  // Navigation links data
  const navLinks = [
    { href: "/", label: "Welcome", icon: <WelcomeIcon /> },
    { href: "/projects", label: "My Projects", icon: <ProjectsIcon /> },
    { href: "/experience", label: "Experience", icon: <ExperienceIcon /> },
    { href: "/testimonials", label: "Testimonials", icon: <TestimonialsIcon /> },
    { href: "/contact", label: "Contact", icon: <ContactIcon /> },
  ]

  return (
    <div className="bg-[#595237] py-1 px-1 sm:py-1 sm:px-2 flex justify-between items-center text-[10px] sm:text-xs text-white">
      {/* Hamburger for mobile/tablet only */}
      <div className="md:hidden mr-2">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <button aria-label="Open menu">
              <Menu size={28} />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setDrawerOpen(false)} className="flex items-center gap-3 py-2 px-2 rounded hover:bg-[#ece7d5] text-[#595237] text-base font-semibold">
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
              <DrawerClose asChild>
                <button className="mt-4 text-[#595237] underline">Close</button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="flex items-center space-x-2 text-[10px] sm:text-xs overflow-x-auto whitespace-nowrap max-w-[70vw] sm:max-w-none">
        <span>New Delhi, INDIA</span>
        <span>|</span>
        <span>{currentDate}</span>
        <span>{currentTime}</span>
      </div>
    </div>
  )
}
