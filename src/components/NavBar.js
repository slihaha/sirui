"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import StockDeckImg from "../../public/personal_stock_deck.png";
import { cn } from "../lib/utils";

const NavBar = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-4 md:mt-16 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-white pr-4">Home</Link>
        <Link href="/publication" className="text-white pr-4">Publication</Link>
        <MenuItem setActive={setActive} active={active} item="Profolios">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Personal Stock Deck"
              href="https://stock-deck-frontend.onrender.com/"
              src={StockDeckImg}
              description="Personal market dashboard that tracks real-time equity momentum using MACD crossovers and Bollinger Band volatility signals."
            />
            <ProductItem
              title="REAAI"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Intelligent real estate assistant that guides buyers from smart property discovery to optimized open house routing."
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/education">Education</HoveredLink>
            <HoveredLink href="/experience">Experience</HoveredLink>
            <HoveredLink href="/liscense_certification">License & Certifications</HoveredLink>
            <HoveredLink href="/skills">Skills</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;