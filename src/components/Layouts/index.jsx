/* eslint-disable react/prop-types */
import MobileHeader from "./MobileHeader";
import Header from "./Header";
import Footer from "./Footer";
import ShoppingCart from "../ShoppingCart";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, updateProduct } from "../../redux/lib/productsSlice";
import ScrollToTop from "../ScrollToTop";

export default function Layout({ children }) {
  const wishlist = useSelector((state) => state.wishlistData.wishlist);
  const cart = useSelector((state) => state.cartData.cart);
  const user = useSelector((state) => state.userInfo);
  const products = useSelector((state) => state.productsData.products);
  const orders = useSelector(state=> state.orderData.orders)

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    await getDocs(collection(db, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getProducts(newData));
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      products.map((product) => {
        const found = wishlist.find((item) => item.id === product.id);
        if (found) {
          dispatch(updateProduct({ ...found, added: true }));
        }
      });
    }, 1000);
  }, []);

  const updateUserWishlist = async () => {
    try {
      await updateDoc(doc(db, "users", user.userDetails.id), {
        wishlist: wishlist,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateUserOrders = async () => {
    try {
      await updateDoc(doc(db, "users", user.userDetails.id), {
        orders:orders ,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateUserCart = async () => {
    try {
      await updateDoc(doc(db, "users", user.userDetails.id), {
        cart: cart,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    if (user.logged) {
      updateUserCart();
    }
  }, [cart]);

  useEffect(() => {
    if (user.logged) {
      updateUserWishlist();
    }
  }, [wishlist]);

  useEffect(() => {
    if (user.logged) {
      updateUserOrders();
    }
  }, [orders]);

  return (
    <>
      <ScrollToTop/>
      <MobileHeader />
      <Header />
      {children}
      <Footer />
      <ShoppingCart />
    </>
  );
}
