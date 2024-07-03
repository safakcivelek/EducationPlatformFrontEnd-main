"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import courses_data from "@/data/courses-data";
import { courseCategory } from "@/data/course-category-data";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlist-slice";

const CourseTabTwo = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const filterData = courses_data.slice(6,14).filter((item) => item.category === activeCategory);
  
  const dispatch = useDispatch();
  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };

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
  //for rating handle


  return (
    <div className="student-course-area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 f-left">
            <div className="section-title mb-50">
              <h2>
                Pick Your <br />
                <span className="down-mark-line-2">Professional</span> Course
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="portfolio-button mt-60">
              <nav>
                <div
                  className="nav portfolio-button-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button onClick={() => setActiveCategory('')} className={activeCategory === '' ? 'active' : ''} type="button">
                    View All <span className="port-red">[06]</span>
                  </button>

                  {courseCategory.length &&
                    courseCategory.slice(0 ,4).map((item) => (
                      <button
                      onClick={() => setActiveCategory(item.category)}
                      className={activeCategory === item.category ? 'active' : ''}
                        key={item.id}
                        type="button"
                      >
                        {item.category} <span className="port-red">[{filterData.length}]</span>
                      </button>
                    ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="course-main-items">
          <div className="tab-content portfolio-tabs-content">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {activeCategory === "" ? (
                  <>
                    {courses_data.slice(6, 14).map((item:any) => (
                      <div
                        key={item.id}
                        className="col-xl-3 col-lg-4 col-md-6  grid-item c-2"
                      >
                        <div className="course-wrapper-2 mb-30">
                          <div className="student-course-img">
                            {item.img && (
                              <Image
                                src={item.img}
                                style={{ width: "100%", height: "auto" }}
                                alt="img not found"
                              />
                            )}
                          </div>
                          <div className="course-cart">
                            <div className="course-info-wrapper">
                              <div className="cart-info-body">
                                <span
                                  className={
                                    item.categoryColor
                                      ? `category-color ${item.categoryColor}`
                                      : "category-color category-color-1"
                                  }
                                >
                                  <Link href="/course">{item.category}</Link>
                                </span>
                                <Link href={`/course-details/${item.id}`}>
                                  <h3>{item.title}</h3>
                                </Link>
                                <div className="cart-lavel">
                                  <h5>
                                    Level : <span>{item.level}</span>
                                  </h5>
                                  <p>{item.description}</p>
                                </div>
                                <div className="info-cart-text">
                                  <ul>
                                    {item.checkIcons.map((item: any) => (
                                      <li key={item.id}>
                                        <i className={item.icon}></i>
                                        {item.checkInfo}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="course-action">
                                  <Link
                                    href={`/course-details/${item.id}`}
                                    className="view-details-btn"
                                  >
                                    View Details
                                  </Link>
                                  <button
                                    onClick={() => handleAddToCart(item)}
                                    className="wishlist-btn"
                                  >
                                    <i className="fal fa-cart-arrow-down"></i>
                                  </button>
                                  <button
                                    onClick={() =>
                                      dispatch(wishlist_product(item))
                                    }
                                    className="c-share-btn"
                                  >
                                    <i className="flaticon-like"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="student-course-footer">
                            <div className="student-course-linkter">
                              <div className="course-lessons">
                                {item.courseLesson && (
                                  <Image
                                    src={item.courseLesson}
                                    style={{ width: "16px", height: "auto" }}
                                    alt="course-img"
                                  />
                                )}
                                <span className="ms-2">{item.lessons}</span>
                              </div>
                              <div className="portfolio-price">
                                <span>
                                  {item.price === 0 ? "FREE" : `$${item.price}`}
                                </span>
                                <del>
                                  {item.oldPrice && `$${item.oldPrice}`}
                                </del>
                              </div>
                            </div>
                            <div className="student-course-text">
                              <h3>
                                <Link href={`/course-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                            </div>
                            <div className="portfolio-user">
                              <div className="user-icon">
                                <Link href="/instructor-profile">
                                  <span>{item.authorName}</span>
                                </Link>
                              </div>
                              <div className="course-icon">
                                {getRating(item?.ratings)}
                                <span>
                                  {item.ratingAve} ({item.ratingCount})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {filterData.map((item) => (
                      <div
                        key={item.id}
                        className="col-xl-3 col-lg-4 col-md-6  grid-item c-2"
                      >
                        <div className="course-wrapper-2 mb-30">
                          <div className="student-course-img">
                            {item.img && (
                              <Image
                                src={item.img}
                                style={{ width: "100%", height: "auto" }}
                                alt="img not found"
                              />
                            )}
                          </div>
                          <div className="course-cart">
                            <div className="course-info-wrapper">
                              <div className="cart-info-body">
                                <span
                                  className={
                                    item.categoryColor
                                      ? `category-color ${item.categoryColor}`
                                      : "category-color category-color-1"
                                  }
                                >
                                  <Link href="/course">{item.category}</Link>
                                </span>
                                <Link href={`/course-details/${item.id}`}>
                                  <h3>{item.title}</h3>
                                </Link>
                                <div className="cart-lavel">
                                  <h5>
                                    Level : <span>{item.level}</span>
                                  </h5>
                                  <p>{item.description}</p>
                                </div>
                                <div className="info-cart-text">
                                  <ul>
                                    {item?.checkIcons?.map((item: any) => (
                                      <li key={item.id}>
                                        <i className={item.icon}></i>
                                        {item.checkInfo}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="course-action">
                                  <Link
                                    href={`/course-details/${item.id}`}
                                    className="view-details-btn"
                                  >
                                    View Details
                                  </Link>
                                  <button className="wishlist-btn">
                                    <i className="flaticon-like"></i>
                                  </button>
                                  <Link
                                    href="/course-details"
                                    className="c-share-btn"
                                  >
                                    <i className="flaticon-previous"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="student-course-footer">
                            <div className="student-course-linkter">
                              <div className="course-lessons">
                                {item.courseLesson && (
                                  <Image
                                    src={item.courseLesson}
                                    style={{ width: "16px", height: "auto" }}
                                    alt="course-img"
                                  />
                                )}
                                <span className="ms-2">{item.lessons}</span>
                              </div>
                              <div className="portfolio-price">
                                <span>
                                  {item.price === 0 ? "FREE" : `$${item.price}`}
                                </span>
                                <del>
                                {item.oldPrice === 0
                                    ? " "
                                    : `$${item.oldPrice}`}
                                </del>
                              </div>
                            </div>
                            <div className="student-course-text">
                              <h3>
                                <Link href={`/course-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                            </div>
                            <div className="portfolio-user">
                              <div className="user-icon">
                                <Link href="/instructor-profile">
                                  <span>{item.authorName}</span>
                                </Link>
                              </div>
                              <div className="course-icon">
                                {getRating(item?.ratings)}
                                <span>
                                  {item.ratingAve} ({item.ratingCount})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3">
            <div className="portfolio-brn mt-20 text-center">
              <Link href="/course" className="edu-sec-btn">
                Tüm kursları göster
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTabTwo;
