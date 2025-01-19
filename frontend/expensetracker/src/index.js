import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import Expensespage from './pages/Expensespage';
import Expenseformpage from './pages/Expenseformpage';
import Userpage from './pages/Userpage';
import Container from './pages/Container';
import LockPage from './pages/Lockpage';
import Aboutpage from './pages/Aboutpage';
const router = createBrowserRouter([
    {
        path: '/',
        element: < LockPage />,
    },
    {
        path: '/expense_tracker',
        element: <Container />,
        children: [
            {
                path: 'login',
                element: <Loginpage />
            },
            {
                path: 'signup',
                element: <Signuppage />
            },
            {
                path: 'home',
                element: <Homepage />
            },
            {
                path: 'all-expenses',
                element: <Expensespage />
            }, {
                path: 'expense-form',
                element: <Expenseformpage />

            },
            {
                path: 'user',
                element: <Userpage />
            },
            {
                path:'about',
                element:<Aboutpage/>
            }
        ]
    }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<div>loading..</div>} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate >
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
