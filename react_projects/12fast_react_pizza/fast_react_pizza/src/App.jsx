import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";

// Alternative way to just declaring routes in the JSX <Routes><Route path="...">
const router = createBrowserRouter([
  // Below is the parent element, all the routes we want in the application will be placed in the children array in this object.
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // Passing in an array of objects where each object is one route:
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // Loader function is provided
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  // Takes in a prop to accept a router we've declared
  return <RouterProvider router={router} />;
}

export default App;
