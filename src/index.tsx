import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './app';
// import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import {createHashRouter, RouterProvider, Navigate} from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Research from './research';
import MLCourse from './ml_course';
import DLCourse from './dl_course';
import MLOpsCourse from './ml_ops_course';

// import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace={true} />,
    },

    {path: '/home', element: <Home />},
    {path: '/resume', element: <Resume />},
    {path: '/research', element: <Research />},
    {path: '/machine-learning-course', element: <MLCourse />},
    {path: '/deep-learning-course', element: <DLCourse />},
    {path: '/ml-ops-course', element: <MLOpsCourse />},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <HashRouter>
//             <Routes>
//                 <Route path="/" element={<Navigate to="/home" replace={true} />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/resume" element={<Resume />} />
//                 <Route path="/research" element={<Research />} />
//                 <Route path="/machine-learning-course" element={<MLCourse />} />
//                 <Route path="/deep-learning-course" element={<DLCourse />} />
//                 <Route path="/ml-ops-course" element={<MLOpsCourse />} />
//             </Routes>
//         </HashRouter>
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
