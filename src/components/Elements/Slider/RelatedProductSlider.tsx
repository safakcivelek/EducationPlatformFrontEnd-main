import React, {useState} from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import products_data from "@/data/products-data";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlist-slice";
import ProductModal from "@/components/common/ProductModel";

const RelatedProductSlider = () => {
  const [modaldata, setModalData] = useState<any>({})
  //for rating handle
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

  const dispatch = useDispatch();

  const handleAddToCart = (product: productsType) => {
      dispatch(cart_product(product));
  };

  return (
    <>
    <div className="related_product pb-115">
      <div className="container custome-container">
        <div className="section-title mb-55">
          <h2>Related Product</h2>
        </div>
        <div className="r-product-active">
          <div>
            <Swiper
              modules={[ Autoplay]}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {products_data.slice(16, 21).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="product-items text-center">
                    <div className="product-img">
                      <Link href="/shop-details">
                        {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="product-img"/>}
                      </Link>
                      <div className="shop-quick-view">
                        <ul>
                          <li>
                            <button onClick={()=>handleAddToCart(item)}>
                              <i className="fal fa-cart-arrow-down"></i>
                            </button>
                          </li>
                          <li>
                            <button  onClick={() => dispatch(wishlist_product(item))}>
                              <i className="fal fa-heart"></i>
                            </button>
                          </li>
                          <li onClick={()=> setModalData(item)}>
                            <span 
                            data-bs-toggle="modal"
                            data-bs-target="#productModalId">
                              <i className="fal fa-eye"></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <Link href="/shop-details">{item.title}</Link>
                      </h4>
                      <span>${item.price}</span>
                      <div className="course-icon">
                        {getRating(item.rating)}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    <ProductModal modaldata={modaldata} />
    </>
  );
};

export default RelatedProductSlider;
