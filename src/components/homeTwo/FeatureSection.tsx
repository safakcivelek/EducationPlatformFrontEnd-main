import React from "react";

const FeatureSection = () => {
  return (
    <div
      className="features-area pt-45 pb-15"
      style={{ background: "url(assets/img/fact/fact.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="features-wrapper d-flex align-items-center mb-30">
              <div className="features-icon">
                <i className="flaticon-online-course"></i>
              </div>
              <div className="features-content">
                <h3>Learn with skills over 2,420 courses</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="features-wrapper d-flex align-items-center mb-30">
              <div className="features-icon">
                <i className="flaticon-certificate"></i>
              </div>
              <div className="features-content">
                <h3>Earn certificates and degrees</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="features-wrapper d-flex align-items-center mb-30">
              <div className="features-icon">
                <i className="flaticon-laptop"></i>
              </div>
              <div className="features-content">
                <h3>Learn from anywhere, any time</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
