"use client";

import Link from "next/link";
import React from "react";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import thumb1 from "../../../public/assets/img/products/product-thumb-01.png";
import thumb2 from "../../../public/assets/img/products/product-thumb-02.png";
import thumb3 from "../../../public/assets/img/products/product-thumb-03.png";
import thumb4 from "../../../public/assets/img/products/product-thumb-04.png";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface productDataType {
  id: number;
  quantity: number;
  rating: number;
  title: string;
  img: StaticImageData;
  details: string;
  price: number;
}

const ProductModal: React.FC<{ modaldata: productDataType }> = ({
  modaldata,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };
  const handleDecressCart = (product: productsType) => {
    dispatch(decrease_quantity(product));
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
    0
  );

  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };

  const myData = cartProducts.find((item) => item.id === modaldata.id);

  return (
    <div
      className="modal fade"
      id="productModalId"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered product__modal"
        role="document"
      >
        <div className="modal-content">
          <div className="product__modal-wrapper p-relative">
            <div className="product__modal-close p-absolute">
              <button data-bs-dismiss="modal">
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="product__modal-inner">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product__modal-box">
                    <div className="tab-content" id="modalTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav1"
                        role="tabpanel"
                        aria-labelledby="nav1-tab"
                      >
                        <div className="product__modal-img w-img">
                          {modaldata.img && <Image
                            src={modaldata.img}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav2"
                        role="tabpanel"
                        aria-labelledby="nav2-tab"
                      >
                        <div className="product__modal-img w-img">
                          <Image
                            src={thumb2}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav3"
                        role="tabpanel"
                        aria-labelledby="nav3-tab"
                      >
                        <div className="product__modal-img w-img">
                          <Image
                            src={thumb3}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav4"
                        role="tabpanel"
                        aria-labelledby="nav4-tab"
                      >
                        <div className="product__modal-img w-img">
                          <Image
                            src={thumb4}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </div>
                    <ul className="nav nav-tabs" id="modalTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="nav1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav1"
                          type="button"
                          role="tab"
                          aria-controls="nav1"
                          aria-selected="true"
                        >
                          <Image
                            src={thumb1}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="nav2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav2"
                          type="button"
                          role="tab"
                          aria-controls="nav2"
                          aria-selected="false"
                        >
                          <Image
                            src={thumb2}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="nav3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav3"
                          type="button"
                          role="tab"
                          aria-controls="nav3"
                          aria-selected="false"
                        >
                          <Image
                            src={thumb3}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="nav4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav4"
                          type="button"
                          role="tab"
                          aria-controls="nav4"
                          aria-selected="false"
                        >
                          <Image
                            src={thumb4}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product__modal-content">
                    <h4 data-bs-dismiss="modal">
                      <Link href="/shop-details">{modaldata.title}</Link>
                    </h4>
                    <div className="product__modal-des mb-40">
                      <p>{modaldata?.details}</p>
                    </div>
                    <div className="product__stock">
                      <span>Availability :</span>
                      <span>In Stock</span>
                    </div>
                    <div className="product__stock sku mb-30">
                      <span>SKU:</span>
                      <span>Juicera C49J89: £875, Debenhams Plus</span>
                    </div>
                    <div className="product__review d-sm-flex">
                      <div className="rating rating__shop edu-rating mb-15 mr-35">
                        <ul>{getRating(modaldata.rating)}</ul>
                      </div>
                      <div className="product__add-review mb-15">
                        <span data-bs-dismiss="modal">
                          <Link href="/shop-details">1 Review</Link>
                        </span>
                        <span data-bs-dismiss="modal">
                          <Link href="/shop-details">Add Review</Link>
                        </span>
                      </div>
                    </div>
                    <div className="product__price">
                      <span>{modaldata?.price === 0 ? "FREE" : `$${modaldata?.price}`}</span>
                    </div>
                    <div className="product__modal-form">
                      <div className="product-quantity-cart mb-30">
                        <div className="product-quantity-form">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <button
                              onClick={() => handleDecressCart(modaldata)}
                              className="cart-minus"
                            >
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input m-0"
                              readOnly
                              value={myData?.quantity || 0}
                            />
                            <button
                              onClick={() => handleAddToCart(modaldata)}
                              className="cart-plus"
                            >
                              <i className="far fa-plus"></i>
                            </button>
                          </form>
                        </div>
                        <div
                          data-bs-dismiss="modal"
                        >
                          <Link href="/cart"
                            className="edu-btn"
                          >
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="product__modal-links">
                      <ul>
                        <li>
                          <Link href="#" title="Add to Wishlist">
                            <i className="fal fa-heart"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" title="Compare">
                            <i className="far fa-sliders-h"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" title="Print">
                            <i className="fal fa-print"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" title="Share">
                            <i className="fal fa-share-alt"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
