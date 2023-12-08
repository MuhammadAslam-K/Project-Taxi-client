import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/state';
import { RouteProps } from '../../interfaces/common';


const DriverProtectedRoute: React.FC<RouteProps> = ({ component: Component }) => {
    const driver = useSelector((state: RootState) => state.driver.loggedIn);

    console.log(driver)
    if (!driver) {

        return <Navigate to="/driver/login" />;
    }
    return <Component />;
};

export default DriverProtectedRoute;
