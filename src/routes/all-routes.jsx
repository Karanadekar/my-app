import * as React from 'react';
import { useRoutes, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import Login from "../pages/login-logout/login";
import SignUpForm from '../pages/login-logout/signup';

const allRoutes = () => {

    const token = false;

    const publicRoutes = [
        {
            path: '/',
            exact: true,
            element: <Navigate to={'/home'} />
        }
    ]

    const privateRoutes = [
        {
            path: '/login',
            exact: true,
            element: !token ? <Login /> : <Navigate to={'/home'} />
        },
        {
            path: '/signup',
            exact: true,
            element: <SignUpForm />
        },
        {
            path: '/home',
            exact: true,
            element: token ? <HomePage /> : <Navigate to={'/login'} />
        }
    ]

    return [...publicRoutes, ...privateRoutes];
}

export default function Routes() {
    const appRoutes = allRoutes();
    return useRoutes(appRoutes);
}