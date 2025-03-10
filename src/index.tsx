import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Research from './research';
import MLCourse from './ml_course';
import DLCourse from './dl_course';
import MLOpsCourse from './ml_ops_course';
import ErrorPage from './error_page';

const router = createHashRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace={true} />,
    },

    { path: '/home', element: <Home /> },
    { path: '/resume', element: <Resume /> },
    { path: '/research', element: <Research /> },
    { path: '/machine-learning-course', element: <MLCourse /> },
    { path: '/deep-learning-course', element: <DLCourse /> },
    { path: '/ml-ops-course', element: <MLOpsCourse /> },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
