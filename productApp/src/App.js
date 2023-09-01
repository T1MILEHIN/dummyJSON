import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavLinks from "./views/NavLinks";
import { element } from "svelte/internal";
import Home from "./views/Home";
import SearchProducts from "./views/SearchProducts";
import Categories from "./views/Categories";
import Users from "./views/Users";



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
        element:<Categories/>
      },
      {

      },
      {
        path: "users",
        element:<Users/>
      }
    ]

  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
