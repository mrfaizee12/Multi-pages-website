import Link from "next/link";
import React from "react";
import { Poppins, Passion_One, Inter } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: "400" });
const fontPassionOne = Passion_One({ subsets: ["latin"], weight: "400" });
const fontInter = Inter({ subsets: ["latin"], weight: "700" });

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        {/* Welcome text */}
        <div className={`hero-welcome ${fontPoppins.className}`}>
          Welcome to WEBDEVIndo
        </div>

        {/* Heading */}
        <h1 className={`hero-heading ${fontPassionOne.className}`}>
          Professional WordPress <br /> And Frontend Developer
        </h1>

        {/* Hire me button */}
        <Link href="/contact">
          <button className={`hero-button ${fontInter.className}`}>
            Hire me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
