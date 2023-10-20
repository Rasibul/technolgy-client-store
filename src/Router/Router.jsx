import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Product from "../Pages/Product/Product";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path:'/:name',
                element: <Product></Product>,
                loader:({params}) => fetch(`http://localhost:5000/${params.name}`)
            },
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path:'/details',
                element:<ProductDetails></ProductDetails>
                // loader:({params}) => fetch(`http://localhost:5000/${params.id}`)
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registation></Registation>
            }
        ]
    }
])
export default routes;