export default function Footer() {
  return (
    <footer className="mt-32 mb-6 flex justify-center">
      <div
        className="
          w-[90vw] max-w-5xl
          backdrop-blur-md bg-black/60
          border border-white/10
          rounded-2xl shadow-lg
          px-8 py-6
          text-white
        "
      >
        {/* Top Row */}
        <div
          className="
            flex flex-col gap-6
            md:flex-row md:items-center md:justify-between
          "
        >
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold tracking-wide">SPHINX</h2>
            {/* <p className="text-xs text-white/60 mt-1 max-w-sm">
              Modern web experience with clean UI & performance.
            </p> */}
          </div>

          {/* Social */}
          <ul
            className="
              flex gap-6
              text-sm text-white/70
              justify-start md:justify-end
            "
          >
            <li className="hover:text-blue-400 cursor-pointer">GitHub</li>
            <li className="hover:text-blue-400 cursor-pointer">Discord</li>
            <li className="hover:text-blue-400 cursor-pointer">Twitter</li>
          </ul>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-6 pt-4
            border-t border-white/10
            text-center text-xs text-white/40
          "
        >
          © {new Date().getFullYear()} SPHINX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
