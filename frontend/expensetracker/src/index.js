import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
// import Expenses from './components/Expenses';
import Homepage from './pages/Homepage';
import Expensespage from './pages/Expensespage';
import Expenseform from './components/Expenseform';
import Expenseformpage from './pages/Expenseformpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Loginpage />
            },
            {
                path: '/signup',
                element: <Signuppage />
            },
            {
                path: '/home',
                element: <Homepage />
            },
            {
                path:'/all-expenses',
                element:<Expensespage/>
            },{
                path:'/expense-form',
                element:<Expenseformpage/>

            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
