import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path: '/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registation',
                element:<Registation></Registation>
            }
        ]
    }
])
export default routes;