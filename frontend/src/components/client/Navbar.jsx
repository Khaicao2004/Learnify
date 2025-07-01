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
                        <a href="" className="hover:text-blue-500">Trang chủ</a>
                        <a href="" className="hover:text-blue-500">Về chúng tôi</a>
                        <a href="" className="hover:text-blue-500">Khoá học</a>
                        <a href="" className="hover:text-blue-500">Giảng viên</a>
                        <a href="" className="hover:text-blue-500">Liên hệ</a>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tham gia</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
