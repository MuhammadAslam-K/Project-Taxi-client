import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserPublicRoute from './public';


import UserSignupPage from '../../pages/user/authentication/UserSignupPage';
import UserLoginPage from '../../pages/user/authentication/UserLoginPage';



const UserRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<UserPublicRoute component={UserSignupPage} />} />
            <Route path="/login" element={<UserPublicRoute component={UserLoginPage} />} />


        </Routes>
    );
};

export default UserRoutes;
