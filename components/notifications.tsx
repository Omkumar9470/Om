export default function Notifications() {
  return (
    <>
      <JobNotification />
      <ClientTestimonial />
    </>
  )
}

function JobNotification() {
  return (
    <div className="w-full max-w-4xl mx-auto md:ml-28 border-2 border-black rounded-lg bg-[#c0c0c0] overflow-hidden">
      <div className="border-2 border-black bg-white p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="bg-[#ffff80] p-2 border-2 border-black">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4a017" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-black">24 Summons from the Realm</h3>
            <p className="text-sm text-black mb-3">Lords and Ladies call upon your skill — answer their raven or let silence speak.</p>
            <div className="flex gap-2">
              <button className="border-2 border-black px-3 py-1 text-sm bg-white hover:bg-[#c0c0c0] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                Eign Wounds
              </button>
              <button className="border-2 border-black px-3 py-1 text-sm bg-white hover:bg-[#c0c0c0] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                Sworn to the Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClientTestimonial() {
  return (
    <div className="w-full max-w-4xl mx-auto md:ml-28 border-2 border-black rounded-lg bg-[#c0c0c0] overflow-hidden">
      <div className="border-2 border-black bg-white p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="bg-[#add8e6] p-2 border-2 border-black">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4682b4" strokeWidth="2">
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-black">Shubham Sahu of House Client</h3>
            <p className="text-sm text-black mb-3">A noble ally — sharp of vision, true of word. A rare bannerman in this realm of pixels.</p>
            <div className="flex gap-2">
              <button className="border-2 border-black px-3 py-1 text-sm bg-white hover:bg-[#c0c0c0] hover:translate-x-[1px] hover:translate-y-[1px] transition-all w-full">
                Etch Into the Old Scrolls
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
