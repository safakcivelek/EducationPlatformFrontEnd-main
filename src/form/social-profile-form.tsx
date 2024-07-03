"use client"
import React, { useEffect } from 'react';

const SocialProfileFrom = () => {
  useEffect(() => {
    const form = document.querySelector("#yourFormId"); 
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);
    const handleSubmit = (event: any) => {
        event.preventDefault();
      };
    return (
        <>
            <form onSubmit={handleSubmit} action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <input
                        type="text"
                        placeholder="Write Your Facebook URL"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <input type="text" placeholder="Write Your Twitter URL" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <input
                        type="text"
                        placeholder="Write Your Instagram URL"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-from-input mb-20">
                      <input
                        type="text"
                        placeholder="Write Your Linkedin URL"
                      />
                    </div>
                  </div>
                </div>
              </form>
        </>
    );
};

export default SocialProfileFrom;