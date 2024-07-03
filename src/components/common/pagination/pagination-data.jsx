import Link from "next/link";
import React from "react";

const PaginationData = () => {
  
  return (
    <div className="edu-pagination mt-30 mb-20">
      <ul>
        <li>
          <Link href="#">
            <i className="fal fa-angle-left"></i>
          </Link>
        </li>
        <li className="active">
          <Link href="#">
            <span>01</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>02</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fal fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PaginationData;
