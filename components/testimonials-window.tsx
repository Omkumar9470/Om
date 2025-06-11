import Image from "next/image"
import Link from "next/link"

export default function TestimonialsWindow() {
  const testimonials = [
    {
      name: "Shubham Sahu",
      role: "Backend Developer",
      company: "Misty",
      quote: "A noble ally — sharp of vision, true of word. A rare bannerman in this realm of pixels.",
    },
  ]

  return (
    <div className="w-full max-w-full mx-auto sm:max-w-4xl md:ml-28 border-4 border-black sm:rounded-xl rounded-md bg-white overflow-hidden">
      <div className="w-full max-w-4xl border- border-black bg-white overflow-hidden">
      <div className="bg-white text-black px-2 py-1 flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-2">
        <div className=" flex items-center justify-center overflow-hidden">
          <Image src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/test_jyfajs.png" alt="Window Icon" width={30} height={30}/>
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
        <h2 className="text-2xl mb-4 text-black">What Lords and Ladies Say of My Deeds</h2>
        <div className="space-y-3 sm:space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-2 rounded-sm border-black p-4 bg-[#f0f0f0]">
              <p className="text-black mb-3 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ffcc99] border-2 border-black rounded-full flex items-center justify-center">
                  👤
                </div>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}
