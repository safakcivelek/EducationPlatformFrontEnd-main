import Link from 'next/link';
import React from 'react';

const HeaderTopBarTwo = () => {
    return (
        <div className="header-top-wrap">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 col-md-7 col-sm-7">
                        <div className="header-top-left">
                            <ul>
                                <li className="d-none d-xxl-flex"><i className="flaticon-location"></i> 14/A, Queen Street City, New York, US</li>
                                <li className="d-none d-lg-flex"><i className="flaticon-email"></i> info@example.com</li>
                                <li className="d-xxxxl-flex"><i className="flaticon-clock"></i> Opening Time : 10: AM - 10 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-5 col-sm-5">
                        <div className="header-top-right">
                            <ul>
                                <li className="header-user-info">
                                    <i className="flaticon-businessman"></i>
                                    <Link href="/signin">Login / Register</Link>
                                </li>
                                <li className="header-social">
                                    <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                    <Link href="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                    <Link href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopBarTwo;