import React, { useState } from 'react';

const DifferentAdress = () => {
    const [isActiveC, setActiveC] = useState(true);
    const handleToggleC = () => {
        setActiveC(!isActiveC);
    };
    return (
        <div className="different-address">
        <div className="ship-different-title">
            <label onClick={handleToggleC}>Ship to a different address?</label>
        </div>
        <div id="ship-box-info" className={`${isActiveC ? "danger" : "d-block"}`}>
            <div className="row">
                <div className="col-md-12">
                    <div className="country-select">
                        <label>Country <span className="required">*</span></label>
                        <select>
                            <option value="volvo">Bangladesh</option>
                            <option value="saab">Algeria</option>
                            <option value="mercedes">Afghanistan</option>
                            <option value="audi">Ghana</option>
                            <option value="audi2">Albania</option>
                            <option value="audi3">Bahrain</option>
                            <option value="audi4">Colombia</option>
                            <option value="audi5">Dominican Republic</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                        <label>First Name <span className="required">*</span></label>
                        <input type="text" placeholder="First name" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                        <label>Last Name <span className="required">*</span></label>
                        <input type="text" placeholder="Last name" required />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input type="text" placeholder="Company name" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkout-form-list">
                        <label>Address <span className="required">*</span></label>
                        <input type="text" placeholder="Street address" required />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkout-form-list">
                        <input type="text"
                            placeholder="Apartment, suite, unit etc. (optional)" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkout-form-list">
                        <label>Town / City <span className="required">*</span></label>
                        <input type="text" placeholder="Town / City" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                        <label>State / County <span className="required">*</span></label>
                        <input type="text" placeholder="State / County" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                        <label>Postcode / Zip <span className="required">*</span></label>
                        <input type="text" placeholder="Postcode / Zip" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                        <label>Email Address <span className="required">*</span></label>
                        <input type="email" placeholder="Email address" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                        <label>Phone <span className="required">*</span></label>
                        <input type="text" placeholder="Phone" />
                    </div>
                </div>
            </div>
        </div>
        <div className="order-notes">
            <div className="checkout-form-list">
                <label>Order Notes</label>
                <textarea id="checkout-mess" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
            </div>
        </div>
    </div>
    );
};

export default DifferentAdress;