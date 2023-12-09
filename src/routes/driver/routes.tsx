import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DriverPublicRoute from './public';



import DriverSignupPage from '../../pages/driver/authentication/DriverSignupPage';
import DriverLoginPage from '../../pages/driver/authentication/DriverLoginPage';
import DashboardPage from '../../pages/driver/DashboardPage';
import DriverProtectedRoute from './protected';



const DriverRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<DriverPublicRoute component={DriverSignupPage} />} />
            <Route path="/login" element={<DriverPublicRoute component={DriverLoginPage} />} />

            <Route path="/dashboard" element={<DriverProtectedRoute component={DashboardPage} />} />

        </Routes>
    );
};

export default DriverRoutes;
