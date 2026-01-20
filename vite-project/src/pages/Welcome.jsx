import Profile from '../assets/profile/profile.jpg';

export default function Welcome() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center px-4 pt-24 sm:pt-28 md:pt-32">

      {/* Profile Avatar */}
      <div className="mb-8">
        <div
          className="
            w-40 h-40
            sm:w-52 sm:h-52
            md:w-64 md:h-64
            rounded-full
            overflow-hidden
            border-4 border-white/20
            shadow-xl
            bg-black
          "
        >
          <img
            src={Profile}
            alt="Profile"
            className="
              w-full h-full
              object-cover
              object-[50%_18%]
            "
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-center">
        KITTITHAT LAOCHAROEN
      </h1>

      {/* Description */}
      <p className="text-white/70 text-base sm:text-lg md:text-xl text-center max-w-2xl">
        COMPUTER ENGINEERING
      </p>

    </div>
  )
}
