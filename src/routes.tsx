import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import { About } from './pages/About';

const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'Home'
    },
    {
        path: '/about',
        element: <React.Suspense fallback={<div>Loading...</div>}><About /></React.Suspense>,
        title: 'About'

    }
];

export const defaultRoutePath = '/';
export const fallbackRoutePath = '/404';

export function getPageTitle(pathname: string) {
    const route = routes.find((route) => route.path === pathname);
    return route ? route.title : 'My App';
}

export function getRoutes() {
    return (
        <React.Fragment>
            {routes.map((route) => (
                <Route path={route.path} element={route.element} />
            ))}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </React.Fragment>
    );
}