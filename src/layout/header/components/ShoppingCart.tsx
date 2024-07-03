import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { remove_cart_product } from "@/redux/slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const handleRemoveCart = (product: productsType) => {
    dispatch(remove_cart_product(product));
  };
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
    0
  );

  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product.id));

  const quantityProduct = uniqueProductIds.size;

  return (
    <li className="header-shop-cart">
      <button type="button">
        <i className="flaticon-shopping-cart"></i>
        <span> {quantityProduct} </span>
      </button>
      {cartProducts.length === 0 && (
        <ul className="minicart">
          <li className="empty-text text-center">
            <h5>Your cart is empty</h5>
          </li>
        </ul>
      )}
      {cartProducts.length >= 1 &&
        <ul className="minicart">
          {cartProducts.map((item) => {
            const productPrice = (item.price ?? 0) * (item.quantity ?? 0);
            return (
              <li key={item.id} className="d-flex align-items-start">
                <div className="cart-img">
                  <Link href={`/shop-details/${item.id}`}>
                    {
                      item.img && <Image
                      src={item.img}
                      alt="img not found"
                      style={{ width: "100%", height: "100%" }}
                    />
                    }
                  </Link>
                </div>
                <div className="cart-content">
                  <h4>
                    <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  <div className="cart-price">
                    <span>{item?.quantity}</span>
                    <span className="new">${productPrice}</span>
                  </div>
                </div>
                <div className="del-icon">
                  <button className="custom_btn" type="button" onClick={() =>
                    dispatch(remove_cart_product(item))
                  }>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </li>
            );
          })}

          <li>
            <div className="total-price">
              <span className="f-left">Total:</span>
              <span className="f-right">${totalPrice}</span>
            </div>
          </li>
          <li>
            <div className="checkout-link">
              <Link href="/cart">View Cart</Link>
              <Link className="black-color" href="/checkout">
                Checkout
              </Link>
            </div>
          </li>
        </ul>
      }
    </li>
  );
};

export default ShoppingCart;
