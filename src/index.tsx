import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Research from './research';
import MLCourse from './ml_course';
import DLCourse from './dl_course';
import MLOpsCourse from './ml_ops_course';
import Resources from './resources';
import Error404Page from './error_404_page';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Navigate to="/" replace={true} /> },
    { path: '/resume', element: <Resume /> },
    { path: '/research', element: <Research /> },
    { path: '/machine-learning-course', element: <MLCourse /> },
    { path: '/deep-learning-course', element: <DLCourse /> },
    { path: '/ml-ops-course', element: <MLOpsCourse /> },
    { path: '/resources', element: <Resources /> },

    { path: '/404', element: <Error404Page /> },
    {
        path: '*',
        element: <Navigate to="/404" replace={true} />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
