"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/listings", label: "Căn hộ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/logo.png" 
                alt="LoanAnLand" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-lg md:text-xl tracking-tight transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                LoanAnLand
              </span>
              <span
                className={cn(
                  "text-[10px] md:text-xs font-medium -mt-1 transition-colors",
                  isScrolled ? "text-muted" : "text-white/70"
                )}
              >
                Chuyên tâm từng căn
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-primary/10",
                  isScrolled
                    ? "text-text-primary hover:text-primary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0389980626"
              className="btn-accent ml-3 text-sm !py-2.5"
            >
              <Phone size={16} />
              Liên hệ ngay
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center",
              isScrolled
                ? "text-primary hover:bg-primary/10"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-3 border-border" />
            <a
              href="tel:0389980626"
              className="btn-accent text-center mt-2"
            >
              <Phone size={18} />
              Gọi ngay: 0389 980 626
            </a>
            <a
              href="https://zalo.me/0389980626"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2"
            >
              Nhắn Zalo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
