import { Routes, Route } from 'react-router-dom';
import Index from '../pages/client/Index';
import Navbar from '../components/client/Navbar';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar />} />
        </Routes>
    )
}

export default AppRoutes;