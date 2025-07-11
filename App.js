import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Body from './src/components/Body';
import ErrorP from './src/components/ErrorP'
import AboutUs from './src/components/AboutUs';
import SwiggyHeader from './src/components/Header';
import ContactUs from './src/components/ContactUs';
import RestrauntsMenu from './src/components/RestrauntsMenu';
import SignIn from './src/components/SignIn';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Shimmer from './src/components/Shimmer';


const Grocery = lazy(()=>import('./src/components/Grocery'));


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
                element: <ContactUs></ContactUs>
            },
            {
                path: 'restraunts/:resId',
                element: <RestrauntsMenu></RestrauntsMenu>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'Grocery',
                element: <Suspense fallback={<Shimmer></Shimmer>}><Grocery></Grocery></Suspense>
            }

        ],
        errorElement: <ErrorP></ErrorP>
    },

]);


const checkRoot = createRoot(document.getElementById('wrapper'));
checkRoot.render(<RouterProvider router={RouteConfig} />);