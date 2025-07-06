import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const DefaultLayout = () => {
    const {user, token} = useStateContext();
    if(!token) {
        return <Navigate to="/login" />
    }
    return (
        <div id="defaultLayout" className="flex justify-between p-4">
            <header>
                <div className="content">
                    Admin Layout
                </div>
                {user.name}
            <a href="#" className="bg-blue-400 px-4 py-2">logout</a>
            </header>
        <div>
        </div>
            <Outlet/>
        </div>
    )
};

export default DefaultLayout;