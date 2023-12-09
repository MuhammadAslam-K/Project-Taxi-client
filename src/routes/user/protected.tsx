import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/state';
import { RouteProps } from '../../interfaces/common';


const UserProtectedRoute: React.FC<RouteProps> = ({ component: Component }) => {
    const user = useSelector((state: RootState) => state.user.loggedIn);

    if (!user) {

        return <Navigate to="/login" />;
    }
    return <Component />;
};

export default UserProtectedRoute;
