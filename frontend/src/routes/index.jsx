import { createBrowserRouter } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Home from '../pages/client/Home';
import CourseDetails from '../pages/client/CourseDetails';
import Courses from '../pages/client/Courses';
import Teachers from '../pages/client/Teachers';
import Register from '../pages/auth/Register';
import UserLayout from '../layouts/UserLayout';
import Login from '../pages/auth/Login';
import MyLearning from '../pages/client/MyLearning';
import MyLearningDetails from '../pages/client/MyLearningDetails';
import Cart from '../pages/client/Cart';
import Checkout from '../pages/client/Checkout';

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
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkout',
                element: <Checkout />
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
]);

export default router;