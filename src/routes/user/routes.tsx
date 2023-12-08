import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserProtectedRoute from './protected';
import UserPublicRoute from './public';

import UserSignupPage from '../../pages/user/authentication/UserSignupPage';
import UserLoginPage from '../../pages/user/authentication/UserLoginPage';
import UserHomePage from '../../pages/user/home/UserHomePage';



const UserRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<UserPublicRoute component={UserSignupPage} />} />
            <Route path="/login" element={<UserPublicRoute component={UserLoginPage} />} />

            <Route path="/" element={<UserProtectedRoute component={UserHomePage} />} />


        </Routes>
    );
};

export default UserRoutes;
