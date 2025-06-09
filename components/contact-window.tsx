import Image from "next/image"
import Link from "next/link"

export default function ContactWindow() {
  return (
    <div className="w-full max-w-4xl mx-auto md:ml-28 border-4 border-black rounded-xl bg-white overflow-hidden">
      <div className="w-full max-w-4xl border- border-black bg-white overflow-hidden"></div>
      <div className="bg-white text-black px-2 py-1 flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center overflow-hidden">
            <Image src= "https://res.cloudinary.com/dpsmum8qz/image/upload/v1748470192/contact_jyk1pp.png" alt="Contact icon" width={30} height={30} />
          </div>
          <span className="text-sm font-bold">Send a Raven</span>
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
        <h2 className="text-2xl mb-4 text-black">Let Us Forge Digital Magic Together</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border-2 border-black p-4 bg-[#f0f0f0]">
              <h3 className="font-bold text-black mb-2">
                📜 Raven Scroll (Email)
              </h3>
              <p className="text-black">omkumar947062@gmail.com</p>
            </div>
            <div className="border-2 border-black p-4 bg-[#f0f0f0]">
              <h3 className="font-bold text-black mb-2">📞 Whispering Flames (Phone)</h3>
              <p className="text-black">+91 9470624800</p>
            </div>
            <div className="border-2 border-black p-4 bg-[#f0f0f0]">
              <h3 className="font-bold text-black mb-2">🌐 The Realm of Scrolls (Social)</h3>
              <p className="text-black">@pande_y_y</p>
            </div>
          </div>
          <div className="border-2 border-black p-4 bg-[#f0f0f0]">
            <h3 className="font-bold text-black mb-4">Send a Message</h3>
            <form className="space-y-3"  action="https://formspree.io/f/mzzgerrg" method="POST">
            <input type="text" name="name" placeholder="Your Name" className="w-full border-2 border-black p-2 bg-white" />

              <input type="email"  name ="email" placeholder="Your Scrollmark – Email" className="w-full border-2 border-black p-2 bg-white" />
              <textarea
                placeholder="Your Message etched with care"
                rows={4}
                name="message"
                className="w-full border-2 border-black p-2 bg-white resize-none"
              ></textarea>
              <button  type="submit" className="w-full border-2 border-black px-4 py-2 bg-white hover:bg-[#c0c0c0] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                Send the Raven
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
