import counter_data from '@/data/counter-data';
import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';

const CounterSectionThree = () => {
    return (
        <div className="counter-area pt-75 pb-30" style={{background:"url(assets/img/bg/university-counter.png)"}}>
            <div className="container">
                <div className="row">
                    {
                        counter_data.slice(4,8).map((item)=>(
                            <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="university-counter-wrapper text-center mb-40">
                                <div className="counter-img">
                                   {item.icon && <item.icon/>}
                                </div>
                                <div className="university-couner-text">
                                    <span className="counters"><CountUpContent number={item.countNum} text={item.countPlus}></CountUpContent></span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CounterSectionThree;