import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"

const App = () => {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: "/products/:id",
      element: <ProductDetails/>
    }
  ])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
