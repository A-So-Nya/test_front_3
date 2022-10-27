import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Addresses } from '../pages/addresses';
import { News } from '../pages/news';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <News />
            </Layout>
        ),
    },
    {
        path: '/address',
        element: (
            <Layout>
                <Addresses />
            </Layout>
        ),
    },
]);
