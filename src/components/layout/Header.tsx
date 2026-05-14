"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const navItems: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/listings", label: "Căn hộ" },
  {
    label: "Dự án",
    children: [
      { href: "/du-an/anland-lakeview", label: "Anland Lakeview" },
      { href: "/du-an/anland-premium", label: "Anland Premium" },
      { href: "/du-an/the-charm-an-hung", label: "The Charm An Hưng" },
    ],
  },
  { href: "/about", label: "Giới thiệu" },
  { href: "/contact", label: "Liên hệ" },
];

function hasChildren(
  item: NavItem
): item is { label: string; children: NavLink[] } {
  return "children" in item;
}

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
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="LoanAnLand"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-bold text-2xl md:text-3xl tracking-tight transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                LoanAnLand
              </span>
              <span
                className={cn(
                  "text-xs md:text-sm font-medium mt-0.5 transition-colors",
                  isScrolled ? "text-muted" : "text-white/70"
                )}
              >
                Chuyên tâm từng căn
              </span>
              <span
                className={cn(
                  "text-xs md:text-sm font-medium transition-colors",
                  isScrolled ? "text-muted" : "text-white/70"
                )}
              >
                An cư vững bước
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              if (!hasChildren(item)) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-5 py-2.5 rounded-lg font-medium text-base transition-all duration-200 hover:bg-primary/10",
                      isScrolled
                        ? "text-text-primary hover:text-primary"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-5 py-2.5 rounded-lg font-medium text-base transition-all duration-200 hover:bg-primary/10",
                      isScrolled
                        ? "text-text-primary hover:text-primary"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="absolute left-0 top-full pt-2 opacity-0 invisible
                               group-hover:opacity-100 group-hover:visible
                               transition-all duration-200 min-w-[240px]"
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-text-primary hover:bg-primary/5 hover:text-accent transition-colors text-sm font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <a
              href="tel:0389980626"
              className="btn-accent ml-4 text-base !py-3 px-6"
            >
              <Phone size={18} />
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
            "absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col p-6 gap-1">
            {navItems.map((item) => {
              if (!hasChildren(item)) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-colors text-base"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="py-1">
                  <p className="px-4 py-2 text-xs font-semibold text-accent uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-text-primary font-medium py-3 pl-8 pr-4 rounded-lg hover:bg-primary/5 transition-colors text-base"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            })}

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
