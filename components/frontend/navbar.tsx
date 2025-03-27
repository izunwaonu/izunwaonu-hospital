"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeButton from "./theme-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import TopNav from "./TopNav";

interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Doctors", href: "/doctors" },
  { label: "Faqs", href: "/#faqs" },
  { label: "Insurance", href: "/#providers" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        // Height of TopNav
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <TopNav />
      <div
        className={cn(
          "w-full z-50 transition-all duration-300",
          isScrolled ? "fixed top-0 left-0" : "relative"
        )}
      >
        <nav
          className={cn(
            "bg-[#f0fdf4] shadow-sm transition-all duration-300",
            isScrolled
              ? "rounded-none border-b border-green-200"
              : "md:rounded-full md:border border-b border-green-200 mx-0 md:mx-8 md:my-4 my-0",
            isScrolled && "shadow-md"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Logo />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-gray-600 hover:text-green-800 transition-colors",
                      {
                        "text-green-800 font-bold bold-heading":
                          item.href !== "/" &&
                          (item.href === pathname ||
                            (pathname.includes(item.href) &&
                              item.href.length > 1)),
                      }
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:block">
                <ThemeButton
                  title="Book Appointment"
                  href="/book-appointment"
                />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 bg-white rounded-full hover:text-gray-900 p-2"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors",
                      item.href === pathname && "text-green-800 font-bold"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <ThemeButton
                    title="Book Appointment"
                    href="/book-appointment"
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
