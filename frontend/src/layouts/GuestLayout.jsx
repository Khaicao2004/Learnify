import Footer from "../components/client/Footer";
import Header from "../components/client/Header";
import Navbar from "../components/client/Navbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
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