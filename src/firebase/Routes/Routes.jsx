import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Career from "../../pages/Career";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Blog from "../../pages/Blog";
import ServiceDetails from "../../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


 
   const routes = createBrowserRouter([
     {
       path:'/',
       element:<Root></Root>,
       children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('../../../public/Services.json')
          
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/career',
          element:<Career></Career>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/services/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        }
       ]
     }

   ])



export default routes;