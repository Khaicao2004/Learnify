import { Routes, Route } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import Index from '../pages/client/Index';

const AppRoutes = () => {
    return (
        <Routes>
           <Route element={<GuestLayout/>}>
                <Route path='/' element={<Index/>} />
           </Route>
        </Routes>
    )
}

export default AppRoutes;