import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts";
import Order from "../pages/dashboard/orders";
import Wishlist from "../pages/dashboard/wishlist";
import Home from "../pages/home";
import AccountLayout from "../components/MyAccount";
import AccountEdit from "../pages/dashboard/accountEdit";
import EditAddress from "../pages/dashboard/editAddress/index";
import Shop from "../pages/Shop/Index";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ShopCartPage from "../pages/ShopCart/ShopCartPage";
import Forms from "../pages/Forms";
import Dashboard from "../pages/dashboard/index";
import ShoppingCartLayout from "../components/ShoppingCartLayout/Index";
import ShopCartCheckOut from "../pages/ShopCart/ShopCartCheckOut";
import ShopCartConfirmation from "../pages/ShopCart/ShopCartConfirmation";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import AdminLayout from "../components/AdminLayout/Index";
import Admin from "../pages/Admin/Admin";
import Products from "../pages/Admin/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Forms />
      </Layout>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "/shop",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: "/shopcart",
    element: (
      <Layout>
        <ShoppingCartLayout>
          <ShopCartPage />
        </ShoppingCartLayout>
      </Layout>
    ),
  },
  {
    path: "/shopcart/checkout",
    element: (
      <Layout>
        <ShoppingCartLayout>
          <ShopCartCheckOut />
        </ShoppingCartLayout>
      </Layout>
    ),
  },
  {
    path: "/shopcart/confirmation/:id",
    element: (
      <Layout>
        <ShoppingCartLayout>
          <ShopCartConfirmation />
        </ShoppingCartLayout>
      </Layout>
    ),
  },
  {
    path: "/shop/product-details/:id",
    element: (
      <Layout>
        <ProductDetails />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <AccountLayout>
          <Dashboard />
        </AccountLayout>
      </Layout>
    ),
  },
  {
    path: "/dashboard/orders",
    element: (
      <Layout>
        <AccountLayout>
          <Order />
        </AccountLayout>
      </Layout>
    ),
  },
  {
    path: "/dashboard/wishlist",
    element: (
      <Layout>
        <AccountLayout>
          <Wishlist />
        </AccountLayout>
      </Layout>
    ),
  },
  {
    path: "/dashboard/accountEdit",
    element: (
      <Layout>
        <AccountLayout>
          <AccountEdit />
        </AccountLayout>
      </Layout>
    ),
  },
  {
    path: "/dashboard/editAddress",
    element: (
      <Layout>
        <AccountLayout>
          <EditAddress />
        </AccountLayout>
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminLayout>
        <Admin />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <AdminLayout>
        <Products />
      </AdminLayout>
    ),
  },
]);
