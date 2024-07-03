import React from "react";
import Link from "next/link";
import blogs_data from "@/data/blogs-data";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="blog-area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="section-title mb-50">
              <h2>
                Read Our <span className="down-mark-line-2">Latest</span> Tech
                News
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs_data.slice(0, 3).map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="blog-wrapper position-relative mb-30">
                <div className="blog-thumb">
                  <Link href={`/blog-details/${item.id}`}>
                    {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="blog-img"/>}
                  </Link>
                </div>
                <Link href="/blog" className="blog-tag">
                  <i className="fal fa-folder-open"></i>
                  {item.blogTag}
                </Link>
                <div className="blog-content-wrapper">
                  <div className="blog-meta">
                    <div className="blog-date">
                      <i className="flaticon-calendar"></i>
                      <span>{item.date}</span>
                    </div>
                    <div className="blog-user">
                      <i className="flaticon-avatar"></i>
                      <span>{item.user}</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <Link href={`/blog-details/${item.id}`}>
                      <h3>{item.title}</h3>
                    </Link>
                    <Link href={`/blog-details/${item.id}`} className="blog-btn">
                      {item.btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
