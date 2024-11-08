"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { menu } from "@/data/menu";

const Navbar = () => {
  const currentPage = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [currentPage]);

  return (
    <div className="navbar-container">
      {/* Logo and Name */}
      <div className="navbar-logo">
        <Image width={50} height={50} src="/logo.png" alt="logo" priority />
        <span className="navbar-title">Faizan Anjum</span>
      </div>

      {/* Mobile menu toggle */}
      <HiOutlineMenuAlt3
        size={30}
        className="menu-icon"
        onClick={() => setShow((prev) => !prev)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${show ? "show" : ""}`}>
        <HiX size={30} className="close-icon" onClick={() => setShow(false)} />
        {menu.map((items, i) => (
          <Link
            key={i}
            href={items.url}
            className={`mobile-menu-link ${currentPage === items.url ? "active" : ""}`}
            onClick={() => setShow(false)}
          >
            {items.label}
          </Link>
        ))}
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        {menu.map((items, i) => (
          <Link
            key={i}
            href={items.url}
            className={`desktop-menu-link ${currentPage === items.url ? "active" : ""}`}
          >
            {items.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
