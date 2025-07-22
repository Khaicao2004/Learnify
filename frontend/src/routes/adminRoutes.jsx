import { createBrowserRouter } from "react-router-dom";

const routerAdmin = createBrowserRouter([
    {
        path: 'admin/',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'users',
                element: <UserList />
            },
        ]
    },
])
export default routerAdmin;