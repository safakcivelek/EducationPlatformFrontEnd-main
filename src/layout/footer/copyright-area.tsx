import Link from 'next/link';
import React from 'react';
import { useSubscription } from '../../hooks/subscriptionHook/useSubscription';



const CopyrightArea = () => {

    const { subscribe } = useSubscription();

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="copyright-text border-line">
                            <p>
                                © Developed by{" "}<Link href="https://www.fatihsevencan.com/">FatihSevencan</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                        <div className="copy-right-support border-line-2">
                            <div className="copy-right-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="43.945"
                                    height="50"
                                    viewBox="0 0 43.945 50"
                                >
                                    <g id="headphones" transform="translate(-31)">
                                        <g
                                            id="Group_2171"
                                            data-name="Group 2171"
                                            transform="translate(36.859 20.508)"
                                        >
                                            <g id="Group_2170" data-name="Group 2170">
                                                <path
                                                    id="Path_2983"
                                                    data-name="Path 2983"
                                                    d="M95.395,210A4.4,4.4,0,0,0,91,214.395v11.914a4.395,4.395,0,1,0,8.789,0V214.395A4.4,4.4,0,0,0,95.395,210Z"
                                                    transform="translate(-91 -210)"
                                                    fill="#2467ec"
                                                />
                                            </g>
                                        </g>
                                        <g
                                            id="Group_2173"
                                            data-name="Group 2173"
                                            transform="translate(31 23.669)"
                                        >
                                            <g id="Group_2172" data-name="Group 2172">
                                                <path
                                                    id="Path_2984"
                                                    data-name="Path 2984"
                                                    d="M33.93,243.6a7.268,7.268,0,0,1,.125-1.234A4.386,4.386,0,0,0,31,246.529v6.055a4.386,4.386,0,0,0,3.054,4.163,7.268,7.268,0,0,1-.125-1.234Z"
                                                    transform="translate(-31 -242.366)"
                                                    fill="#2467ec"
                                                />
                                            </g>
                                        </g>
                                        <g
                                            id="Group_2175"
                                            data-name="Group 2175"
                                            transform="translate(48.578 20.508)"
                                        >
                                            <g id="Group_2174" data-name="Group 2174">
                                                <path
                                                    id="Path_2985"
                                                    data-name="Path 2985"
                                                    d="M227.113,210a4.4,4.4,0,0,0-4.395,4.395v11.914a4.4,4.4,0,0,0,4.395,4.395,4.335,4.335,0,0,0,1.259-.206,4.386,4.386,0,0,1-4.189,3.136h-4.664a4.395,4.395,0,1,0,0,2.93h4.664a7.333,7.333,0,0,0,7.324-7.324V214.395A4.4,4.4,0,0,0,227.113,210Z"
                                                    transform="translate(-211 -210)"
                                                    fill="#2467ec"
                                                />
                                            </g>
                                        </g>
                                        <g
                                            id="Group_2177"
                                            data-name="Group 2177"
                                            transform="translate(71.891 23.669)"
                                        >
                                            <g id="Group_2176" data-name="Group 2176">
                                                <path
                                                    id="Path_2986"
                                                    data-name="Path 2986"
                                                    d="M449.722,242.366a7.266,7.266,0,0,1,.125,1.234v11.914a7.266,7.266,0,0,1-.125,1.234,4.386,4.386,0,0,0,3.055-4.163v-6.055A4.386,4.386,0,0,0,449.722,242.366Z"
                                                    transform="translate(-449.722 -242.366)"
                                                    fill="#2467ec"
                                                />
                                            </g>
                                        </g>
                                        <g
                                            id="Group_2179"
                                            data-name="Group 2179"
                                            transform="translate(31)"
                                        >
                                            <g id="Group_2178" data-name="Group 2178">
                                                <path
                                                    id="Path_2987"
                                                    data-name="Path 2987"
                                                    d="M52.973,0A22,22,0,0,0,31,21.973v.037a7.253,7.253,0,0,1,3-1.361,19.02,19.02,0,0,1,37.952,0,7.256,7.256,0,0,1,3,1.361v-.037A22,22,0,0,0,52.973,0Z"
                                                    transform="translate(-31)"
                                                    fill="#2467ec"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="copyright-svg-content">
                                <p>Sorunuz mu var? Bizi 7/24 arayabilirsiniz.</p>
                                <h5>
                                    <a href="tel:(987)547587587">(0216) 331 48 00</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <div className="copyright-subscribe">
                            <p>Yeni eklenen eğitimlerden haberdar olmak için abone olabilirsiniz.</p>
                            <button onClick={subscribe} className="subscribe-button">
                                Abone Ol<i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyrightArea;