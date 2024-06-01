import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Menu from './../pages/Menu/Menu';
import OrderFood from './../pages/OrderFood/OrderFood';
import LogIn from './../pages/LogIn/LogIn';
import SignUp from './../pages/SignUp/SignUp';
import Dashbord from './../layout/Dashbord';
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from './../pages/Dashboard/AddItems/AddItems';
import AdminRoute from "./AdminRoute";


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
    {
        path: "dashbord",
        element: <PrivetRoute><Dashbord></Dashbord></PrivetRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>,
            },
            {
                path: 'all_users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
                // element: <AllUsers></AllUsers>,
            },
            {
                path: 'add_items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>,
            },
        ]
    },
]);