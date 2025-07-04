import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const DefaultLayout = () => {
    const {user, token} = useStateContext();
    if(!token) {
        return <Navigate to="/login" />
    }
    return (
        <div id="defaultLayout">
            <header>
            <div className="content">
                Admin Layout
            </div>
        <div>
            {user.name}
            <a href="#" className="bg-blue-400 px-4 py-2">logout</a>
        </div>
            </header>
            <Outlet/>
        </div>
    )
};

export default DefaultLayout;