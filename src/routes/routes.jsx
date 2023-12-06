import Home from "../pages/user/Home";
import UserRoot from "../pages/user/UserRoot";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Meals from "../pages/user/Meals";
import Details from "../pages/user/Details";
import { Dashboard } from "@mui/icons-material";
import AddMeals from "../pages/admin/AddMeals";
import MealsPageForAdmin from "../pages/admin/MealsPageForAdmin";
import AdminRoot from "../pages/admin/AdminRoot";
import Adress from "../pages/user/Adress";
import AboutMeals from "../pages/user/AboutMeals";
import Cart from "../pages/user/Cart";
import Wishlist from "../pages/user/Wishlist";
import Users from "../pages/admin/Users";
import Profile from "../pages/user/Profile";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/meals/:id",
        element: <Details />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/adress",
        element: <Adress />,
      },
      {
        path: "/about",
        element: <AboutMeals />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      { path: "/admin/addnewmeals", 
      element: <AddMeals /> },
      {
        path:"/admin/mealspageforadmin",
        element:<MealsPageForAdmin/>,
      },
      {
        path:"/admin/users",
        element:<Users/>,
      },
      {

        path:"/admin/addmeals",
        element:<AddMeals/>,
      }
    ],
  },
];

export default routes;
