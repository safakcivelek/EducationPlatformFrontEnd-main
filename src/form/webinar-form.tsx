import React from "react";

const WebniarForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit} action="#">
        <div className="row">
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input type="text" placeholder="Name" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-select">
              <select className="mb-20">
                <option defaultValue="Subject">Course</option>
                <option defaultValue="Subject">Webinar</option>
                <option defaultValue="Subject">Payment</option>
                <option defaultValue="Subject">Information</option>
              </select>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-from-input mb-20">
              <textarea placeholder="Message" name="message"></textarea>
            </div>
          </div>
          <div className="colxl-2 ">
            <div className="cont-btn mb-20">
              <button type="submit" className="cont-btn">
                Registration
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default WebniarForm;
