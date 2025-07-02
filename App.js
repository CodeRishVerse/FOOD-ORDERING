import React from 'react';
import { createRoot } from 'react-dom/client';
import Body from './src/components/Body';
import ErrorP from './src/components/ErrorP'
import AboutUs from './src/components/AboutUs';
import SwiggyHeader from './src/components/Header';
import Contact from './src/components/ContactUs';
import RestrauntsMenu from './src/components/RestrauntsMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';


const Wrapper = () => {
    return (
        <div>
            <SwiggyHeader></SwiggyHeader>
            <Outlet></Outlet>

        </div>
    )

}

const RouteConfig = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper></Wrapper>,
        children: [
            {

                path: '/',
                element: <Body></Body>
            },
            {

                path: 'AboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'restraunts',
                element: <RestrauntsMenu></RestrauntsMenu>
            }

        ],
        errorElement: <ErrorP></ErrorP>
    },

]);


const checkRoot = createRoot(document.getElementById('wrapper'));
checkRoot.render(<RouterProvider router={RouteConfig} />);