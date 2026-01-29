"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search, User, ShoppingBag, Bell, ChevronDown, Sparkles, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState("Home")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Categories", href: "#categories", hasDropdown: true },
    { label: "Vendors", href: "#vendors" },
    { label: "Deals", href: "#deals", badge: "Hot" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Customer Care", href: "#customer-care" },
  ]

  const categoryLinks = [
    { label: "Food & Dining", href: "#", icon: "🍕" },
    { label: "Fashion", href: "#", icon: "👗" },
    { label: "Electronics", href: "#", icon: "📱" },
    { label: "Home & Decor", href: "#", icon: "🏠" },
    { label: "Beauty & Spa", href: "#", icon: "💅" },
    { label: "Fitness", href: "#", icon: "💪" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (label: string, href: string) => {
    setActiveNav(label)
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Currently serving 25+ cities</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Phone size={14} />
              <span>Support: +91-7410855544</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-80 transition-opacity">Become a Vendor</button>
            <div className="h-4 w-px bg-white/30"></div>
            <button className="hover:opacity-80 transition-opacity">Login</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg" 
            : "bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <div className="text-white font-bold text-lg">B</div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blitify
              </span>
              <span className="text-xs text-foreground/60 -mt-1">Local. Trusted. Amazing.</span>
            </div>
          </div>
 
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <button
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeNav === link.label
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <span className="font-medium">{link.label}</span>
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white">
                      {link.badge}
                    </span>
                  )}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                  )}
                </button>
                 
                {link.hasDropdown && link.label === "Categories" && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-border/50 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={16} className="text-primary" />
                        <span className="font-medium text-foreground">Popular Categories</span>
                      </div>
                      <div className="space-y-2">
                        {categoryLinks.map((category) => (
                          <a
                            key={category.label}
                            href={category.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors group"
                          >
                            <span className="text-xl">{category.icon}</span>
                            <span className="text-foreground/80 group-hover:text-primary">
                              {category.label}
                            </span>
                          </a>
                        ))}
                      </div>
                      <button className="w-full mt-4 py-2 rounded-lg border-2 border-primary/30 text-primary hover:bg-primary/5 transition-colors">
                        View All Categories
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
 
          <div className="flex items-center gap-3">
             
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ShoppingBag size={20} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 transition-all">
                <User size={18} />
                <span className="font-medium">Sign In</span>
              </button>
            </div>
 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
 
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-2xl animate-slide-down">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    activeNav === link.label
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <span className="font-medium">{link.label}</span>
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white">
                      {link.badge}
                    </span>
                  )}
                  {link.hasDropdown && (
                    <ChevronDown size={16} />
                  )}
                </button>
              ))}
               
              <div className="pt-4 border-t border-border mt-4 space-y-3">
                <button className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted">
                  <Bell size={20} />
                  <span>Notifications</span>
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted">
                  <ShoppingBag size={20} />
                  <span>My Cart</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white">
                  <User size={20} />
                  <span className="font-medium">Sign In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </>
  )
}