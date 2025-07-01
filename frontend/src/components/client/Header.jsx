const Header = () => {
    return (
        <>
           <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Nền tảng học trực tuyến chất lượng cao
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                    Khám phá hàng trăm khóa học, được giảng dạy bởi các chuyên gia hàng đầu.
                    </p>
                    <a
                        href="#courses"
                        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
                    >
                        Khám phá khóa học
                    </a>
                </div>
           </header>
        </>
    )
}

export default Header;