import { Outlet } from "react-router-dom";
import Navbar from "../components/client/Navbar";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";

const DefaultLayout = () => {
     return (
        <>
            <Navbar />
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
};

export default DefaultLayout;