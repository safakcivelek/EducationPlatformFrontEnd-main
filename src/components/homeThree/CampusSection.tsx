import React from "react";
import shapeLightImg from "../../../public/assets/img/shape/shape-light.png";
import campusShapeImg from "../../../public/assets/img/shape/campus-shape-2.png";
import campusShapeImgTwo from "../../../public/assets/img/shape/campus-shape-1.png";
import studentShapeImg from "../../../public/assets/img/shape/student-shape-05.png";
import campusImgOne from "../../../public/assets/img/campus/campus-img-1.png";
import campusImgTwo from "../../../public/assets/img/campus/campus-img-2.png";
import campusImgThree from "../../../public/assets/img/campus/campus-img-3.png";
import campusImgFour from "../../../public/assets/img/campus/campus-img-4.png";
import campusImgFive from "../../../public/assets/img/campus/campus-img-5.png";
import Image from "next/image";

const CampusSection = () => {
  return (
    <div className="campus-area fix pt-120 pb-70 ">
      <div className="container">
        <div className="campus-wrapper position-relative">
          <div className="campus-shape-sticker">
            <div className="shape-light">
              <Image
                src={shapeLightImg}
                style={{ width: "auto", height: "auto" }}
                alt="img not found"
              />
            </div>
            <div className="campus-shape-content">
              <h5>
                Education is the<span> Platform that makes</span>possible to
                everyone
              </h5>
            </div>
          </div>
          <div className="campus-shape-1">
            <Image
              src={campusShapeImg}
              style={{ width: "auto", height: "auto" }}
              alt="shape"
            />
          </div>
          <div className="campus-shape-2">
            <Image
              src={studentShapeImg}
              style={{ width: "auto", height: "auto" }}
              alt="shape"
            />
          </div>
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="compus-content mb-30">
                <div className="section-title mb-30">
                  <h2>
                    Students Enjoy Their Lives at
                    <span className="down-mark-line-2">Eduman</span> Campus
                  </h2>
                </div>
                <p>
                  Helping employees gain skills and providing career development
                  often take a back seat to business priorities but workplace
                  better right now. Seventy percent of workers think that.{" "}
                </p>
                <ul>
                  <li>
                    <i className="far fa-check"></i>Free for physically
                    handcraft{" "}
                  </li>
                  <li>
                    <i className="far fa-check"></i>Easy to enroll courses{" "}
                  </li>
                  <li>
                    <i className="far fa-check"></i>Access more then 100K online
                    Kurslar
                  </li>
                  <li>
                    <i className="far fa-check"></i>Upskill your organization
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className="campus-img-wrapper position-relative">
                <div className="campus-shape-3">
                  <Image
                    src={campusShapeImgTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="campus-img-1">
                  <Image
                    src={campusImgOne}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="campus-img-2">
                  <Image
                    src={campusImgTwo}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="campus-img-3">
                  <Image
                    src={campusImgThree}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="campus-img-4">
                  <Image
                    src={campusImgFour}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="campus-img-5">
                  <Image
                    src={campusImgFive}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
