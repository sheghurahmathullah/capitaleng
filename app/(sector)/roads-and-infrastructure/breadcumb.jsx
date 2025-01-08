import Link from "next/link";
import React from "react";

export default function Breadcumb2() {
  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
               
          <li>
              <Link scroll={false} href="/project">
                Sectors
              </Link>
            </li>
            <li>Roads and Infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}