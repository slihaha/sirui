"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import StockDeckImg from "../../public/personal_stock_deck.png";
import { cn } from "../lib/utils";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex relative w-full items-center justify-center">
        <DesktopNavbar className="top-2" />
      </div>

      {/* Mobile Navigation Header */}
      <div className="md:hidden flex items-center justify-between px-5 py-4 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-sans tracking-tight"
        >
          Sirui Li
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-2xl border-b border-white/15 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-purple-400 py-1 transition-colors border-b border-white/5"
            >
              Home
            </Link>
            <Link
              href="/publication"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-purple-400 py-1 transition-colors border-b border-white/5"
            >
              Publication
            </Link>
            <Link
              href="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-purple-400 py-1 transition-colors border-b border-white/5"
            >
              Experience
            </Link>
            <Link
              href="/education"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-purple-400 py-1 transition-colors border-b border-white/5"
            >
              Education
            </Link>
            <Link
              href="/skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-purple-400 py-1 transition-colors border-b border-white/5"
            >
              Skills
            </Link>
            <Link
              href="/liscense_certification"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-purple-400 py-1 transition-colors border-b border-white/5"
            >
              License & Certifications
            </Link>

            {/* Mobile Portfolio Projects */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Featured Projects
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href="https://stock-deck-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 text-sm text-neutral-200"
                >
                  <span className="font-medium">Personal Stock Deck</span>
                  <LaunchIcon fontSize="inherit" className="text-purple-400 text-xs" />
                </a>
                <a
                  href="https://algochurn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 text-sm text-neutral-200"
                >
                  <span className="font-medium">REAAI</span>
                  <LaunchIcon fontSize="inherit" className="text-purple-400 text-xs" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

function DesktopNavbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-4 md:mt-16", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-white pr-4 hover:text-purple-300 transition-colors">Home</Link>
        <Link href="/publication" className="text-white pr-4 hover:text-purple-300 transition-colors">Publication</Link>
        <MenuItem setActive={setActive} active={active} item="Portfolios">
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