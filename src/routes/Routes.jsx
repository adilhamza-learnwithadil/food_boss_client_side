import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Menu from './../pages/Menu/Menu';
import OrderFood from './../pages/OrderFood/OrderFood';
import LogIn from './../pages/LogIn/LogIn';
import SignUp from './../pages/SignUp/SignUp';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/order_food/:category',
                element: <OrderFood></OrderFood>,
            },
        ]
    },
]);