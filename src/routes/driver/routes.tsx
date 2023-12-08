import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DriverPublicRoute from './public';



import DriverSignupPage from '../../pages/driver/authentication/DriverSignupPage';
import DriverLoginPage from '../../pages/driver/authentication/DriverLoginPage';



const DriverRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<DriverPublicRoute component={DriverSignupPage} />} />
            <Route path="/login" element={<DriverPublicRoute component={DriverLoginPage} />} />

        </Routes>
    );
};

export default DriverRoutes;
