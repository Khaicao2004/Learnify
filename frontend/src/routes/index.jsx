import { createBrowserRouter } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Home from '../pages/client/Home';
import CourseDetails from '../pages/client/CourseDetails';
import Courses from '../pages/client/Courses';
import Teachers from '../pages/client/Teachers';
import Register from '../pages/auth/Register';
import DefaultLayout from '../layouts/DefaultLayout';
import Index from '../pages/admin/users/Index';
import Login from '../pages/auth/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/course-details/:slug',
                element: <CourseDetails />,
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/teachers',
                element: <Teachers />
            }
        ]
    },
    {
        path: '/admin',
        element: <DefaultLayout/>,
        children: [
            {
                path: 'users',
                element: <Index/>
            }
        ]
    }
]); 

export default router;