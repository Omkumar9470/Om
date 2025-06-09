"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function TopBar() {
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")

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

  return (
    <div className="bg-[#595237]  py-1 px-2 flex justify-between items-center text-xs text-white">
      <div className="flex space-x-4">
        <Link
          href="/"
          className="bg-white px-3 py-1 rounded-xl text-[#595237] transition-all"
        >
          Welcome
        </Link>
        <Link href="/contact" className="hover:underline cursor-pointer py-1">
          Contact
        </Link>
        <div className=" cursor-pointer py-1">Help</div>
      </div>
      <div className="flex items-center space-x-2 text-xs">
        <span>New Delhi, INDIA</span>
        <span>|</span>
        <span>{currentDate}</span>
        <span>{currentTime}</span>
      </div>
    </div>
  )
}
