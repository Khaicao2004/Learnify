import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";

const AdminLayout = () => {
    const {user,token} = useStateContext();
     if(!token || user.role !== "admin") {
        return <Navigate to="/" />
    }
    return (
        <div>
            Admin layout
           <Outlet/>
        </div>
    )
};

export default AdminLayout;