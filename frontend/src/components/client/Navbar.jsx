const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">E-
                        <span className="text-orange-400">Learning</span>
                    </div>

                    {/* Nav links */}
                    <div className="hidden md:flex space-x-6 text-gray-600 items-center">
                        <a href="/" className="hover:text-blue-500">Home</a>
                        <a href="#" className="hover:text-blue-500">About</a>
                        <a href="/courses" className="hover:text-blue-500">Courses</a>
                        <a href="/teachers" className="hover:text-blue-500">Teachers</a>
                        <a href="#" className="hover:text-blue-500">Contact</a>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Join for free</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
