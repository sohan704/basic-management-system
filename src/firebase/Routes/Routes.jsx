import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Career from "../../pages/Career";


 
   const routes = createBrowserRouter([
     {
       path:'/',
       element:<Root></Root>,
       children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('./Services.json')
          
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/career',
          element:<Career></Career>
        }
       ]
     }

   ])



export default routes;