const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">E-
                            <span className="text-orange-400">Learning</span>
                        </h2>
                        <p className="text-sm">Nền tảng học trực tuyến giúp bạn tiếp cận kiến thức mọi lúc, mọi nơi với sự hướng dẫn của các giảng viên chất lượng.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Trang chủ</a></li>
                            <li><a href="#" className="hover:text-white">Khóa học</a></li>
                            <li><a href="#" className="hover:text-white">Giảng viên</a></li>
                            <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
                        <p className="text-sm">Email: info@elearning.com</p>
                        <p className="text-sm">Điện thoại: 0123 456 789</p>
                        <p className="text-sm">Địa chỉ: Hà Nội, Việt Nam</p>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    © 2025 E-Learning. All rights reserved.
                </div>
            </footer>
        </>
    )
};

export default Footer;