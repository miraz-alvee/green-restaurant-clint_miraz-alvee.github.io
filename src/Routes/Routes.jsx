import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRoute from "../Routes/AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import Payment from "../pages/Dashboard/Payment";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import ReservationForm from "../pages/Dashboard/ReservationForm";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
      ]
    },
    {
      path: "dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
            path: 'mycart',
            element: <MyCart></MyCart>
        },
        {
          path: 'userhome',
          element : <UserHome></UserHome>

        },
        {
          path: 'payment',
          element : <Payment></Payment>
        },
        {
          path: 'reservations',
          element : <ReservationForm></ReservationForm>
        },

        //Admin routes
       
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
            path: 'allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path: 'additems',
            element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
            path: 'manageitems',
            element: <ManageItems></ManageItems>
        }
      ]
    }
  ]);