import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserPublicRoute from './public';


import UserSignupPage from '../../pages/user/authentication/UserSignupPage';



const UserRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<UserPublicRoute component={UserSignupPage} />} />


        </Routes>
    );
};

export default UserRoutes;
