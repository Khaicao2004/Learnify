import { Routes, Route } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Home from '../pages/client/Home';
import CourseDetails from '../pages/client/CourseDetails';
import Courses from '../pages/client/Courses';
import Teachers from '../pages/client/Teachers';
import Register from '../pages/auth/Register';

const AppRoutes = () => {
    return (
        <Routes>
           <Route element={<GuestLayout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/course-details/:slug' element={<CourseDetails/>} />
                <Route path='/courses' element={<Courses/>} />
                <Route path='/teachers' element={<Teachers/>} />
           </Route>
        </Routes>
    )
}

export default AppRoutes;