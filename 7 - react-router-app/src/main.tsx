import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import DashboardLayout from "./components/dashboard/DashboardLayout.tsx";
import UserProfile from "./components/dashboard/UserProfile.tsx";
import UserSettings from "./components/dashboard/UserSettings.tsx";
import ProductDetails from "./components/ProductDetail.tsx";
import Login from "./components/Login.tsx";
import Products from "./components/Products.tsx";
import { productsLoader } from "./api/products/product-loader.ts";
import React from "react";
import RootLayout from "./components/RootLayout.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";

// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<DashboardLayout />}>
//         <Route path="profile" element={<UserProfile />} />
//         <Route path="settings" element={<UserSettings />} />
//       </Route>
//       <Route path="products/:productId" element={<ProductDetails />} />
//     </Routes>
//   </BrowserRouter>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <DashboardLayout />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "settings",
            element: <UserSettings />,
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
