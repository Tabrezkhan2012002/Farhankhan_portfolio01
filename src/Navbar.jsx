<nav className="bg-white shadow">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-4 transition-transform duration-500 hover:scale-125">
        <img
          src="profile-pic (3).png"
          className="h-12 w-12 rounded-full"
        />

        <p className="text-lg font-semibold">
          <span className="text-indigo-700">Mohd</span>{" "}
          <span className="text-black">Farhan Khan</span>
        </p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <Link to="/Blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
        <Link to="/About" className="text-gray-700 hover:text-indigo-600">About</Link>
        <Link to="/Contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="flex flex-col gap-4 pb-4 md:hidden">
        <Link to="/Blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
        <Link to="/About" className="text-gray-700 hover:text-indigo-600">About</Link>
        <Link to="/Contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
      </div>
    )}
  </div>
</nav>
