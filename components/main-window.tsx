import Image from "next/image"
import Link from "next/link"

export default function MainWindow() {
  return (
    <div className="w-full max-w-full mx-auto sm:max-w-4xl md:ml-28 border-4 border-black sm:rounded-xl rounded-md bg-[#c0c0c0] overflow-hidden">

      {/* Window title bar */}
      <div className="bg-white text-black px-2 py-1 flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-2">
        <div className=" flex items-center justify-center overflow-hidden">
          <Image
          src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/pc_logo_h0m2ud.png"
          alt="Window Icon"
          width={30}
          height={30}
          />
        </div>

          <span className="text-sm font-bold ">Welcome To My Portfolio</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-5 h-4 bg-[#c0c0c0] border-2 border-black flex items-center justify-center text-black text-xs hover:bg-[#e0e0e0]">
            −
          </div>
          <button className="w-5 h-4 bg-[#c0c0c0] border-2 border-black flex items-center justify-center text-black text-xs hover:bg-[#e0e0e0]">
            □
          </button>
          <button className="w-5 h-4 bg-[#c0c0c0] border-2 border-black flex items-center justify-center text-black text-xs hover:bg-[#e0e0e0]">
            ×
          </button>
        </div>
      </div>

      {/* Window content */}
      <div className="p-3 sm:p-6 flex flex-col md:flex-row gap-3 sm:gap-6 bg-white">
        <div className="md:w-1/2">
          <div className="border-2 rounded-lg border-black p-1 bg-white">
            <Image
              src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470190/profile_j1scjn.jpg"
              width={500}
              height={400}
              alt="Black and white photo of Om holding the rafting paddle"
              className="w-full h-auto grayscale"
            />
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <div>
            <h1 className="text-4xl text-black">Hail,</h1>
            <h2 className="text-4xl text-black mb-1">This Is Om Pandey.</h2>
            <p className="text-gray-600 mb-3 text-sm">Welcome to my portfolio — forged in the fires of innovation and sharpened like Valyrian steel.</p>
            <div className="w-full h-px bg-black mb-4"></div>
          </div>

          <div className="space-y-3 text-sm text-black">
            <p>
              In the great expanse of the digital realm, I am Om Pandey — a craftsman of the Web, 
              born of code and tempered by fire. With the sword of design in one hand and the language of Python in the other,
              I forge seamless experiences that command loyalty across kingdoms.
            </p>
            <p>
              I have delved into the crypts of machine learning, summoned insight from data, and stood sentinel over the gates of cyberspace — a silent guardian against shadows that lurk beyond the Wall.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href="/projects"
              className="w-full border-2 border-black px-3 py-2 bg-white hover:bg-[#c0c0c0] rounded-md text-sm hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all block text-center"
            >

              <span>🛡️ Gaze Upon My Creations, If You Dare</span>
            </Link>

            <Link
              href="/testimonials"
              className="w-full border-2 border-black px-3 py-2 bg-white hover:bg-[#c0c0c0] rounded-sm text-sm hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all block text-center"
            >
              🐺 Hear the Tales My Clients Tell
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
