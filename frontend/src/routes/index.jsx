import { createBrowserRouter } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Home from '../pages/client/Home';
import CourseDetails from '../pages/client/CourseDetails';
import Courses from '../pages/client/Courses';
import Teachers from '../pages/client/Teachers';
import Register from '../pages/auth/Register';
import UserLayout from '../layouts/UserLayout';
import UserList from '../pages/admin/users/UserList';
import Login from '../pages/auth/Login';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import MyLearning from '../pages/client/MyLearning';
import MyLearningDetails from '../pages/client/MyLearningDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/course-details/:slug',
                element: <CourseDetails />
            },
            {
                path: '/teachers',
                element: <Teachers />
            },
            {
                path: '/my-learning',
                element: <MyLearning />
            },
            {
                path: '/my-learning-details/:slug',
                element: <MyLearningDetails />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
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
]);

export default router;