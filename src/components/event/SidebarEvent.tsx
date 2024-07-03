import Link from "next/link";
import React from "react";

const SidebarEvent = () => {
  return (
    <div className="col-xl-4 col-lg-5 col-md-8">
      <div className="sidebar-widget-wrapper">
        <div className="sidebar-widget mb-30">
          <div className="event-wrapper">
            <div className="event-select">
              <select>
                <option value="volvo">All Events</option>
                <option value="saab">This Month</option>
                <option value="opel">Next Month</option>
                <option value="audi">This Year</option>
              </select>
            </div>
          </div>
        </div>
        <div className="side-bar-widget mb-30">
          <div className="event-sidebar">
            <div className="find-event">
              <div className="find-event-info">
                <h4>Find Events</h4>
              </div>
              <div className="find-event-wrapper mb-25">
                <div className="find-event-input calendar">
                  <input type="date" />
                  <i className="flaticon-calendar"></i>
                </div>
              </div>
              <div className="find-event-wrapper mb-25">
                <div className="find-event-input">
                  <input type="text" placeholder="Location" />
                  <i className="flaticon-pin-1"></i>
                </div>
              </div>
              <div className="find-event-wrapper mb-25">
                <div className="find-event-input">
                  <input type="text" placeholder="Search keyword...." />
                  <i className="flaticon-search"></i>
                </div>
              </div>
            </div>
            <div className="zoom-btn">
              <Link href="/event" className="event-btn">
                Find Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarEvent;
