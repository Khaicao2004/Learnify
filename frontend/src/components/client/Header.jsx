const Header = () => {
    return (
        <>
           <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        High-quality online learning platform
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Explore hundreds of courses, taught by leading experts.
                    </p>
                    <a
                        href="#courses"
                        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
                    >
                        Explore courses
                    </a>
                </div>
           </header>
        </>
    )
}

export default Header;