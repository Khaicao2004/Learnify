import { Routes, Route } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Home from '../pages/client/Home';

const AppRoutes = () => {
    return (
        <Routes>
           <Route element={<GuestLayout/>}>
                <Route path='/' element={<Home/>} />
           </Route>
        </Routes>
    )
}

export default AppRoutes;