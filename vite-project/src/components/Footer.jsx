export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div
        className="
          pointer-events-auto
          mb-4
          w-[90vw] max-w-5xl
          backdrop-blur-md bg-black/60
          border border-white/10
          rounded-2xl shadow-lg
          px-8 py-6
          text-white
        "
      >
        {/* Top Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-wide">SPHINX</h2>
          </div>

          <ul className="flex gap-6 text-sm text-white/70">
            <li className="hover:text-blue-400 cursor-pointer">GitHub</li>
            <li className="hover:text-blue-400 cursor-pointer">Discord</li>
            <li className="hover:text-blue-400 cursor-pointer">Twitter</li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} SPHINX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
