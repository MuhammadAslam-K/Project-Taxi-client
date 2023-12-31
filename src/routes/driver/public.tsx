import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/state';
import { RouteProps } from '../../interfaces/common';


const DriverPublicRoute: React.FC<RouteProps> = ({ component: Component }) => {
    const driver = useSelector((state: RootState) => state.driver.loggedIn);

    if (driver) {

        return <Navigate to="/driver/dashboard" />;
    }
    return <Component />;
};

export default DriverPublicRoute;