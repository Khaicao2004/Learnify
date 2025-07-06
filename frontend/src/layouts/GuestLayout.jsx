import Footer from "../components/client/Footer";
import Header from "../components/client/Header";
import Navbar from "../components/client/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const GuestLayout = () => {
    const {token} = useStateContext();
    if(token) {
        return <Navigate to="/courses" />
    }
    return (
        <>
            <Navbar/>
            <Header />
                <Outlet/>
            <Footer/>
        </>
    )
};

export default GuestLayout;