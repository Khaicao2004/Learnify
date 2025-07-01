import { Routes, Route } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Home from '../pages/client/Home';
import CourseDetails from '../pages/client/CourseDetails';

const AppRoutes = () => {
    return (
        <Routes>
           <Route element={<GuestLayout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='/course-details/:slug' element={<CourseDetails/>} />
           </Route>
        </Routes>
    )
}

export default AppRoutes;