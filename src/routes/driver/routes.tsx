import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DriverPublicRoute from './public';



import DriverSignupPage from '../../pages/driver/authentication/DriverSignupPage';



const DriverRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<DriverPublicRoute component={DriverSignupPage} />} />

        </Routes>
    );
};

export default DriverRoutes;
