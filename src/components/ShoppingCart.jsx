import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { hidecart } from "../redux/lib/showCartMenu";
import { useNavigate } from "react-router";
import CartItem from "./CartItem";
import EmptyView from "./EmptyView";

export default function ShoppingCart() {
  const showCart = useSelector((state) => state.showCartMenu.showCart);
  const user = useSelector((state) => state.userInfo);
  const cart = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    cart.map((item) => {
      total += parseInt(item.price);
    });
    return total;
  };

  return (
    <>
      <div
        className="aside aside_right overflow-hidden cart-drawer"
        id="cartDrawer"
        style={{ right: showCart ? 0 : "", opacity: showCart ? 1 : 0 }}
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            SHOPPING BAG ({" "}
            <span className="cart-amount js-cart-items-count">
              {cart.length}
            </span>{" "}
            ){" "}
          </h3>
          <button
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
            onClick={() => dispatch(hidecart())}
          />
        </div>
        {/* /.aside-header */}
        <div className="aside-content cart-drawer-items-list">
          {cart.length > 0 ? (
            cart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })
          ) : (
            // <p  style={{color:'red' ,height:'100%' ,backgroundColor:'blue'}}>No data</p>
            <EmptyView text={"Cart"} />
          )}
        </div>
        {/* /.aside-content */}
        <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
          <hr className="cart-drawer-divider" />
          <div className="d-flex justify-content-between">
            <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
            <span className="cart-subtotal fw-medium">${totalPrice()}</span>
          </div>
          {/* /.d-flex justify-content-between */}
          <a
            className="btn btn-light mt-3 d-block"
            onClick={() => {
              navigate("/shopcart"), dispatch(hidecart());
            }}
          >
            View Cart
          </a>
          <a
            className="btn btn-primary mt-3 d-block"
            onClick={() => {
              navigate("/shopcart/checkout"), dispatch(hidecart());
            }}
          >
            Checkout
          </a>
        </div>
        {/* /.aside-content */}
      </div>
    </>
  );
}
