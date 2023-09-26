import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavLinks from "./views/NavLinks";
import Home from "./views/Home";
import SearchProducts from "./views/SearchProducts";
import Categories from "./views/Categories";
import Users from "./views/Users";
import Comments from "./views/Comments";
import Todos from "./views/Todos";
import SearchUsers from "./views/SearchUsers";
import SingleProduct from "./views/SingleProduct";
import { SingleProductLoader } from "./views/SingleProduct";
import CategoriesProducts from "./components/CathegorizedProduct";
import Students from "./views/Students";
import StudentTable from "./components/StudentTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLinks />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "searchproducts",
        element:<SearchProducts/>
      },
      {
        path: "categories",
        element:<Categories/>,
        children: [
          {
            path: ":category",
            element: <CategoriesProducts />
          },
        ]
      },
      {
        path: "studentform",
        element: <Students />
      },
      {
        path: "comments",
        element: <Comments />
      },
      {
        path: "todos",
        element: <Todos />
      },
      {
        path: "users",
        element:<Users/>
      },
      {
        path: "search",
        element: <SearchUsers />
      },
    ],
  },
  {
    path: "/products/:productId",
    element: <SingleProduct />,
    loader: SingleProductLoader,
  },
  
  {
    path: "/allstudents",
    element: <StudentTable />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
