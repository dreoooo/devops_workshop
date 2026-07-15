export default function Header() {
  return (
    <header className="max-w-5xl mx-auto px-6 pt-10 pb-8">
      <div
        className="
          rounded-[2rem]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          shadow-lg
          px-8
          py-12
          text-center
          transition-all
          duration-300
          hover:shadow-xl
        "
      >
        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-pink-500
            bg-clip-text
            text-transparent
            antialiased
          "
        >
          Dreo's DevOps Todo Manager 
        </h1>

        <p
          className="
            mt-5
            text-base
            md:text-lg
            text-gray-500
            font-medium
            tracking-wide
            antialiased
          "
        >
          Manage your daily tasks smoothly and stay organized 🌱
        </p>

        
      </div>
    </header>
  );
}