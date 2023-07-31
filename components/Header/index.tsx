"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./style.scss";
import Link from "next/link";

const headerItems = [
  {
    path: "/",
    link: "home",
  },
  {
    path: "/about",
    link: "about",
  },
  {
    path: "/projects",
    link: "projects",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="header">
      <div className="header-list">
        {headerItems?.map((item, index) => (
          <div className="header-list__item" key={index}>
            <Link
              href={item?.path}
              style={{
                fontWeight: pathname === item?.path ? "600" : "normal",
              }}
            >
              {item?.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
