import { Outlet } from "react-router-dom";
import Navbar from "../components/client/Navbar";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayout = () => {
     return (
        <>
            <Navbar />
            <Header />
            <Outlet/>
            <Footer/>
            <ToastContainer position="top-right" autoClose={2000} />
        </>
    )
};

export default DefaultLayout;