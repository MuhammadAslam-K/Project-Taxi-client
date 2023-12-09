import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/state';
import { RouteProps } from '../../interfaces/common';


const UserPublicRoute: React.FC<RouteProps> = ({ component: Component }) => {
    const user = useSelector((state: RootState) => state.user.loggedIn);

    console.log(user)
    if (user) {

        return <Navigate to="/" />;
    }
    return <Component />;
};

export default UserPublicRoute;