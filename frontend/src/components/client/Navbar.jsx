import { Navigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { useStateContext } from "../../contexts/contextprovider";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
    const {user, setUser, token, setToken} = useStateContext();
     if(!token) {
        return <Navigate to="/login" />
    }

    const onLogout = () => {
        axiosInstance.post('logout').then(() => {
            setUser(null);
            setToken(null);
        }).catch(err => console.error(err)
    )
    }
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
                        <a href="/my-learning" className="hover:text-blue-500">My Learning</a>
                        <a href="#" className="hover:text-blue-500">Contact</a>
                    </div>
                    {user && (
                        <div className="hidden md:flex justify-end items-center space-x-4">
                            <a href="/cart" className="hover:text-blue-500"><ShoppingCartIcon className="w-6 h-6" /></a>
                            <span>{user.name}</span>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
