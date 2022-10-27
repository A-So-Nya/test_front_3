import React from 'react';
import { store } from './store/store';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const root: Root = createRoot(document.querySelector('#root')!);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
);
